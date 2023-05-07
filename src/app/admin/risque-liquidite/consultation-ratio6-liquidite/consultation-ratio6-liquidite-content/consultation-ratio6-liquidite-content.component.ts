import { Component, OnInit } from '@angular/core';
import { ConsultationR6Component } from '../consultation-r6/consultation-r6.component';

@Component({
  selector: 'app-consultation-ratio6-liquidite-content',
  templateUrl: './consultation-ratio6-liquidite-content.component.html',
  styleUrls: ['./consultation-ratio6-liquidite-content.component.css']
})
export class ConsultationRatio6LiquiditeContentComponent implements OnInit {

  constructor() { }
    protected menuItems = [
    {
      menuItem: "Ratio6 : Investissement sous forme de placements interbancaires",
      path: "ConsultationR6",
      Component: ConsultationR6Component

    }
  ];

  ngOnInit(): void {
  }

}
