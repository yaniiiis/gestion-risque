import { Component, OnInit } from "@angular/core";
import { IndicateurService } from "src/app/_services/indicateur.service";
import { InputWithCheckboxEvent } from "../../commons/my-input-list-with-checkbox/my-input-list-with-checkbox.component";

@Component({
  selector: "app-indicateurs",
  templateUrl: "./indicateurs.component.html",
  styleUrls: ["./indicateurs.component.css"],
})
export class IndicateursComponent implements OnInit {
  constructor(private indicateurService: IndicateurService) {}

  date: string;
  choicesOfKris = ["kris1", "kris2", "kris3"];
  selectedChoiceIndex: number = 0;
  listOfDates: string[] = [];
  myListInputHasError: boolean = false;
  inputListTitle: string = "Dates";
  selectedDateText: string;
  selectedDates = [];

  ngOnInit(): void {
    this.indicateurService.getAllDates().subscribe((res: string[]) => {
      this.listOfDates = res;
    });
  }

  dateClicked(event: InputWithCheckboxEvent) {
    if (event.checked) {
      this.selectedDates.push(event.item);
      this.indicateurService.getData();
    } else {
      this.selectedDates = this.selectedDates.filter((d) => d != event.item);
      this.indicateurService.unCheckDate(event.item);
    }
  }

  protected menuItems = [
    {
      menuItem: "Taux de defaut",
      path: "taux-defaut",
    },
    {
      menuItem: "Concentration 25%",
      path: "concentration-25",
    },
  ];

  // dateChanged() {
  //   this.indicateurService.getData();
  // }

  krisChoiceChanged(item: string) {}
}
