import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parametrage-analyse-portfeuille",
  templateUrl: "./parametrage-analyse-portfeuille.component.html",
  styleUrls: ["./parametrage-analyse-portfeuille.component.css"],
})
export class ParametrageAnalysePortfeuilleComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: "Rapports ",
      path: "Rapport",
    },
    {
      menuItem: "Domaines",
      path: "ParametrageDomaine",
    },

    {
      menuItem: "Colonnes",
      path: "columns",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
