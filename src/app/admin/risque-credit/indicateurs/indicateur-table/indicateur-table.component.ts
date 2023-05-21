import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IndicateurService } from "src/app/_services/indicateur.service";
import { InputWithCheckboxEvent } from "src/app/admin/commons/my-input-list-with-checkbox/my-input-list-with-checkbox.component";

@Component({
  selector: "app-indicateur-table",
  templateUrl: "./indicateur-table.component.html",
  styleUrls: ["./indicateur-table.component.css"],
})
export class IndicateurTableComponent implements OnInit {
  constructor(
    private indicateurService: IndicateurService,
    private router: Router
  ) {}
  indicOnHeader = [];
  header = ["Indice"];
  data = {};
  dates: string[] = [];
  dataText: string = "veuillez ajouter une date";

  listOfDates: string[] = [];
  myListInputHasError: boolean = false;
  inputListTitle: string = "Dates";
  selectedDateText: string;
  selectedDates = [];
  title: string;
  show: boolean = false;

  ngOnInit(): void {
    this.indicateurService.resetData();
    this.title = this.myTitleMapper[this.getLastStringFromUrl(this.router.url)];
    this.indicateurService.getAllDates().subscribe((res: string[]) => {
      this.listOfDates = res;
    });

    this.show = this.listOfPossibleLastUrls.includes(
      this.getLastStringFromUrl(this.router.url)
    );

    console.log("the urlk is : ", this.getLastStringFromUrl(this.router.url));
    this.indicateurService.dataSubject$.subscribe((res) => {
      console.log("console : ", res);
      this.dates = [];
      this.data = res;
      this.header = ["Indice"];
      for (let index = 0; index < res["values"].length; index++) {
        this.dates.push(Object.keys(res["values"][index])[0]);
      }

      this.header = this.header.concat(this.dates);

      // console.log("Data : ", d);

      if (!this.header.includes("Limit")) this.header.push("Limit");
      if (!this.header.includes("Trigger")) this.header.push("Trigger");
      if (!this.header.includes("Ratting")) this.header.push("Ratting");
    });
  }

  getLastStringFromUrl(url: string): string {
    const segments = url.split("/");
    return segments[segments.length - 1];
  }

  dateClicked(event: InputWithCheckboxEvent) {
    if (event.checked) {
      this.selectedDates.push(event.item);
      this.indicateurService.getData(
        this.getLastStringFromUrl(this.router.url),
        event.item
      );
    } else {
      this.selectedDates = this.selectedDates.filter((d) => d != event.item);
      this.indicateurService.unCheckDate(event.item);
    }
  }

  myTitleMapper = {
    "taux-defaut": "Taux de defaut",
    "concentration-25": "Concentration 25%",
    "concentration-grands-risques": "Concentration grand risques",
    "concentration-top-10": "Concentration top 10",
    "concentration-decouverts-comptes": "Concentration découverts en comptes",
  };

  listOfPossibleLastUrls = [
    "taux-defaut",
    "concentration-25",
    "concentration-grands-risques",
    "concentration-top-10",
    "concentration-decouverts-comptes",
  ];
}

// selectedData = {
//   "Taux de concentration": {
//     "31/12/2020": 38,
//     "31/11/2020": 19,
//     "31/10/2020": 27,
//     min: 32,
//     limit: 78,
//     unit: "%",
//   },
// };

// header: any[] = [];

// data = {
//   "Taux de concentration": {
//     value: [
//       {
//         date: "31/12/2020",
//         value: 38,
//       },
//       {
//         date: "31/11/2020",
//         value: 19,
//       },
//       {
//         date: "31/10/2020",
//         value: 27,
//       },
//     ],
//     min: 32,
//     max: 78,
//     unit: "%",
//   },

//   "Limit des ceoncentration /Fond Propre Réglementaie": {
//     value: [
//       {
//         date: "31/12/2020",
//         value: 48,
//       },
//       {
//         date: "31/11/2020",
//         value: 29,
//       },
//       {
//         date: "31/10/2020",
//         value: 97,
//       },
//     ],
//     min: 32,
//     max: 78,
//     unit: "%",
//   },
// };
// });
// this.indicateurService.datesSubject$.subscribe((d) => {
//   console.log("DDDDD : ", d);
//   this.header = this.header.concat(d);
//   if (!this.header.includes("Limit")) this.header.push("Limit");
//   if (!this.header.includes("Trigger")) this.header.push("Trigger");
//   if (!this.header.includes("Ratting")) this.header.push("Ratting");
// });

// this.indicateurService.dataSubject$.subscribe((d) => {
//   d.forEach((element) => {
//     for (let index = 0; index < element["values"].length; index++) {
//       console.log("dateee : ", Object.keys(element["values"][index]));
//       this.dates.push(Object.keys(element["values"][index])[0]);
//     }
//     this.header = this.header.concat(this.dates);
//     this.data = d;
//     console.log("Data : ", d);
//   });

//   if (!this.header.includes("Limit")) this.header.push("Limit");
//   if (!this.header.includes("Trigger")) this.header.push("Trigger");
//   if (!this.header.includes("Ratting")) this.header.push("Ratting");
// });

// for (let key in this.selectedData) {
//   this.header.push(key);
// }
