import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-concentration-details",
  templateUrl: "./concentration-details.component.html",
  styleUrls: ["./concentration-details.component.css"],
})
export class ConcentrationDetailsComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  back() {
    this.location.back();
  }

  header = [
    "Date",
    "ID Client",
    "Nom Client",
    "Agence",
    "Numéro de compte",
    "Type d'engagement",
    "Type de crédit",
    "Montant",
    "Type garantie",
    "Montant Garantie",
    "Provision",
    "Risque net",
  ];
  data: any[] = [
    {
      Date: "30/09/2022",
      "ID Client": 1,
      "Nom Client": "Client 1",
      Agence: "Hydra",
      "Numéro de compte": "XXX XXXX XX",
      "Type d'engagement": "Bilan",
      "Type de crédit": "CMT",
      Montant: 200000,
      "Type garantie": "PHB",
      "Montant Garantie": 700000,
      Provision: 0,
      "Risque net": 1000000,
    },
    {
      Date: "30/09/2022",
      "ID Client": 2,
      "Nom Client": "Client 2",
      Agence: "Hydra",
      "Numéro de compte": "YYYY YYYYYYY YY",
      "Type d'engagement": "Bilan",
      "Type de crédit": "CMT",
      Montant: 200000,
      "Type garantie": "PHB",
      "Montant Garantie": 700000,
      Provision: 0,
      "Risque net": 1000000,
    },
  ];
}
