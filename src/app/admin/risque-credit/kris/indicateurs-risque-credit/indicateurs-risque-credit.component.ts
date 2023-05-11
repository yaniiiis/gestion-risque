import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-indicateurs-risque-credit",
  templateUrl: "./indicateurs-risque-credit.component.html",
  styleUrls: ["./indicateurs-risque-credit.component.css"],
})
export class IndicateursRisqueCreditComponent implements OnInit {
  constructor() {}

  date: string;
  choicesOfKris = ["kris1", "kris2", "kris3"];
  selectedChoiceIndex: number = 0;

  ngOnInit(): void {}

  dateChanged() {}

  krisChoiceChanged(item: string) {}
}
