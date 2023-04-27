import { Component, OnInit } from '@angular/core';
import { RatioLiquiditeQuotidienComponent } from '../ratio-liquidite-quotidien/ratio-liquidite-quotidien.component';
import { RatioLiquiditeMensuelComponent } from '../ratio-liquidite-mensuel/ratio-liquidite-mensuel.component';
import { RatioLiquiditeTrimestrielComponent } from '../ratio-liquidite-trimestriel/ratio-liquidite-trimestriel.component';

@Component({
  selector: 'app-consultation-ratio1-liquidite-content',
  templateUrl: './consultation-ratio1-liquidite-content.component.html',
  styleUrls: ['./consultation-ratio1-liquidite-content.component.css']
})
export class ConsultationRatio1LiquiditeContentComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: "Ratio de liquidité quotidien",
      path: "RatioLiquiditeQuotidien",
      Component: RatioLiquiditeQuotidienComponent,

    },
    {
      menuItem: "Ratio de liquidité mensuel",
      path: "RatioLiquiditeMensuel",
      Component: RatioLiquiditeMensuelComponent,
    },
    {
      menuItem: "Ratio de liquidité trimestriel",
      path: "RatioLiquiditeTrimestriel",
      Component: RatioLiquiditeTrimestrielComponent,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
