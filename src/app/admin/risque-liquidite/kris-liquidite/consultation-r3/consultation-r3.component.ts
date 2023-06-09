import { Component, OnInit } from "@angular/core";

interface Ratios {
  value: number;
  limit: number;
  label: string;
  min: number;
  unit: string;
}
interface Indicateur {
  id: number;
  description: string;
  valeurMinimum: number;
  valeurLimite: number;
  dateEffet: Date;
}
@Component({
  selector: "app-consultation-r3",
  templateUrl: "./consultation-r3.component.html",
  styleUrls: ["./consultation-r3.component.css"],
})
export class ConsultationR3Component implements OnInit {
  selectedDate = "";
  data: Ratios[] = [];
  indicateur: Indicateur = {
    id: 0,
    description: "",
    dateEffet: null,
    valeurLimite: 0,
    valeurMinimum: 0,
  };
  header: string[] = ["Limit", "Trigger", "Rating"];

  constructor() {}

  ngOnInit(): void {}
}
