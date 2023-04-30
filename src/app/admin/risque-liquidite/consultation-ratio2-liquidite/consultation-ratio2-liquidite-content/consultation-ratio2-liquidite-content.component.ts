import { Component, OnInit } from '@angular/core';
import { ConsultationR2Component } from '../consultation-r2/consultation-r2.component';

@Component({
  selector: 'app-consultation-ratio2-liquidite-content',
  templateUrl: './consultation-ratio2-liquidite-content.component.html',
  styleUrls: ['./consultation-ratio2-liquidite-content.component.css']
})
export class ConsultationRatio2LiquiditeContentComponent implements OnInit {

  constructor() { }

    protected menuItems = [
    {
      menuItem: "R2- Actif liquide / Total Actif",
      path: "ConsultationR2",
      Component: ConsultationR2Component

    }
  ];

  ngOnInit(): void {
  }

}
