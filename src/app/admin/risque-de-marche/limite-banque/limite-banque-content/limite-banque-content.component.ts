import { Component, OnInit } from "@angular/core";
import { SurveillanceLimiteComponent } from "./surveillance-limite/surveillance-limite.component";
import { SurveillanceMensuelleComponent } from "./surveillance-mensuelle/surveillance-mensuelle.component";
import { ListeLimiteComponent } from "./liste-limite/liste-limite.component";
import { ListeBeneficiaireComponent } from "./liste-beneficiaire/liste-beneficiaire.component";

@Component({
  selector: "app-limite-banque-content",
  templateUrl: "./limite-banque-content.component.html",
  styleUrls: ["./limite-banque-content.component.css"],
})
export class LimiteBanqueContentComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: "Liste des limites",
      path: "ListeLimites",
      Component: ListeLimiteComponent,
    },

    {
      menuItem: " Liste des bénénificaires",
      path: "ListeBeneficiaire",
      Component: ListeBeneficiaireComponent,
    },

    {
      menuItem: "Surveillance quotidienne",
      path: "SurveillanceLimites",
      Component: SurveillanceLimiteComponent,
    },
    {
      menuItem: "Surveillance mensuelle",
      path: "SurveillanceMensuelle",
      Component: SurveillanceMensuelleComponent,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
