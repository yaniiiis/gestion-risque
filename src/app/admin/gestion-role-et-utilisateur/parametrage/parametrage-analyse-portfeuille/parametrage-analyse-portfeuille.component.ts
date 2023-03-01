import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parametrage-analyse-portfeuille",
  templateUrl: "./parametrage-analyse-portfeuille.component.html",
  styleUrls: ["./parametrage-analyse-portfeuille.component.css"],
})
export class ParametrageAnalysePortfeuilleComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: "Parametrage analyse des portefeuilles ",
      path: "ParametrageIndirect",
    },

    {
      menuItem: "Domaines ",
      path: "ParametrageDomaine",
    },
    {
      menuItem: "Rapport ",
      path: "rapport",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
