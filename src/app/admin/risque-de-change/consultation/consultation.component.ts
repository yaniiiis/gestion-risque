import { Component, OnInit } from '@angular/core';
import { PositionParDateComponent } from './position-par-date/position-par-date.component';
import { PositionParPlusieursDatesComponent } from './position-par-plusieurs-dates/position-par-plusieurs-dates.component';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: "Position par date",
      path: "PositionParDate",
      Component: PositionParDateComponent,

    },
    {
      menuItem: "Position par plusieurs date",
      path: "PositionParPlusieursDates",
      Component: PositionParPlusieursDatesComponent,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
