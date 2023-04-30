import { Component, OnInit } from '@angular/core';
import { ConsultationR4Component } from '../consultation-r4/consultation-r4.component';

@Component({
  selector: 'app-consultation-ratio4-liquidite-content',
  templateUrl: './consultation-ratio4-liquidite-content.component.html',
  styleUrls: ['./consultation-ratio4-liquidite-content.component.css']
})
export class ConsultationRatio4LiquiditeContentComponent implements OnInit {

  constructor() { }

     protected menuItems = [
    {
      menuItem: "Ratio4 : Crédits immobiliers/Dépôts clientèle en dinars Algériens ",
      path: "ConsultationR4",
      Component: ConsultationR4Component

    }
  ];

  ngOnInit(): void {
  }

}
