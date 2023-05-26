import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-analyse-portfeuille",
  templateUrl: "./analyse-portfeuille.component.html",
  styleUrls: ["./analyse-portfeuille.component.css"],
})
export class AnalysePortfeuilleComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: "Portefeuille direct",
      path: "Portfeuilledirect",
    },
    {
      menuItem: "Portefeuille indirect",
      path: "AnalysePortfeuilleInDirect",
    },
    {
      menuItem: "Duration",
      path: "Duration",
    },
    {
      menuItem: "Créances douteuses",
      path: "CreanceDuteuse",
    },
    {
      menuItem: "Actions de recouverment",
      path: "ActionDeRecouverment",
    },
    {
      menuItem: "Actions De Justice",
      path: "ActionDeJustices",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
