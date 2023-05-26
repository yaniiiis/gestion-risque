import { Component, OnInit } from "@angular/core";
import { PositionParDateComponent } from "../position-par-date/position-par-date.component";
import { PositionParPlusieursDatesComponent } from "../position-par-plusieurs-dates/position-par-plusieurs-dates.component";

@Component({
  selector: "app-consultation-content",
  templateUrl: "./consultation-content.component.html",
  styleUrls: ["./consultation-content.component.css"],
})
export class ConsultationContentComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: "Position par date",
      path: "PositionParDate",
      Component: PositionParDateComponent,
    },
    {
      menuItem: "Position par plusieurs dates",
      path: "PositionParPlusieursDates",
      Component: PositionParPlusieursDatesComponent,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
