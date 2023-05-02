import { Component, OnInit } from '@angular/core';
import { ConsultationR5Component } from '../consultation-r5/consultation-r5.component';

@Component({
  selector: 'app-consultation-ratio5-liquidite-content',
  templateUrl: './consultation-ratio5-liquidite-content.component.html',
  styleUrls: ['./consultation-ratio5-liquidite-content.component.css']
})
export class ConsultationRatio5LiquiditeContentComponent implements OnInit {
       protected menuItems = [
    {
      menuItem: "Ratio5 : Emplois/Ressources",
      path: "ConsultationR5",
      Component: ConsultationR5Component

    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
