import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-kris",
  templateUrl: "./concentration.component.html",
  styleUrls: ["./concentration.component.css"],
})
export class ConcentrationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  protected menuItems = [
    {
      menuItem: "Client ",
      path: "concentration-client",
    },
    {
      menuItem: "Groupe",
      path: "concentration-groupe",
    },
  ];
}
