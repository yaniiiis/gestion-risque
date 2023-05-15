import { Component, OnInit } from "@angular/core";
import { IndicateurService } from "src/app/_services/indicateur.service";

@Component({
  selector: "app-indicateur-table",
  templateUrl: "./indicateur-table.component.html",
  styleUrls: ["./indicateur-table.component.css"],
})
export class IndicateurTableComponent implements OnInit {
  constructor(private indicateurService: IndicateurService) {}
  indicOnHeader = [];
  header = ["Indice"];
  data = {};
  dates: string[] = [];

  ngOnInit(): void {
    // this.indicateurService.getData();
    this.indicateurService.dataSubject$.subscribe((res) => {
      console.log("response : ", res);
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

      console.log("header : ", this.header);
    });
  }
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
