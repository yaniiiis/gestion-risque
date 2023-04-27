import { Component, OnInit } from '@angular/core';
import { RatioLiquiditeQuotidienComponent } from './ratio-liquidite-quotidien/ratio-liquidite-quotidien.component';
import { RatioLiquiditeMensuelComponent } from './ratio-liquidite-mensuel/ratio-liquidite-mensuel.component';
import { RatioLiquiditeTrimestrielComponent } from './ratio-liquidite-trimestriel/ratio-liquidite-trimestriel.component';

@Component({
  selector: 'app-consultation-ratio1-liquidite',
  templateUrl: './consultation-ratio1-liquidite.component.html',
  styleUrls: ['./consultation-ratio1-liquidite.component.css']
})
export class ConsultationRatio1LiquiditeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {

  }

}
