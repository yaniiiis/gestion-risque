import { Component, OnInit } from '@angular/core';
import { RapportKrisLiquiditeComponent } from '../rapport-kris-liquidite/rapport-kris-liquidite.component';


@Component({
  selector: 'app-consultation-rapport-kris-liquidite-content',
  templateUrl: './consultation-rapport-kris-liquidite-content.component.html',
  styleUrls: ['./consultation-rapport-kris-liquidite-content.component.css']
})
export class ConsultationRapportKrisLiquiditeContentComponent implements OnInit {

   protected menuItems = [
    {
      menuItem: "Rapport",
      path: "ConsultationRapport",
      Component: RapportKrisLiquiditeComponent

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
