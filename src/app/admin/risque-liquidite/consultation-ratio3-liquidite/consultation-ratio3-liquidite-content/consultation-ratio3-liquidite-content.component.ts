import { Component, OnInit } from '@angular/core';
import { ConsultationR3Component } from '../consultation-r3/consultation-r3.component';

@Component({
  selector: 'app-consultation-ratio3-liquidite-content',
  templateUrl: './consultation-ratio3-liquidite-content.component.html',
  styleUrls: ['./consultation-ratio3-liquidite-content.component.css']
})
export class ConsultationRatio3LiquiditeContentComponent implements OnInit {

  constructor() { }

   protected menuItems = [
    {
      menuItem: "Ratio 3 : LTD (Loans to Deposits)",
      path: "ConsultationR3",
      Component: ConsultationR3Component

    }
  ];

  ngOnInit(): void {
  }

}
