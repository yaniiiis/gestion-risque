import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-kris",
  templateUrl: "./kris.component.html",
  styleUrls: ["./kris.component.css"],
})
export class KRIsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  protected menuItems = [
    {
      menuItem: "Concentration",
      path: "concentration",
    },
    {
      menuItem: "Indicateurs risque crédit",
      path: "indicateurs-risque-credit",
    },
  ];
}
