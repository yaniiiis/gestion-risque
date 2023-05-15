import { Component, OnInit } from "@angular/core";
import { IndicateurService } from "src/app/_services/indicateur.service";

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

  ngOnInit(): void {
    // this.indicateurService.getData();
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

  dateChanged() {
    this.indicateurService.getData();
  }

  krisChoiceChanged(item: string) {}
}
