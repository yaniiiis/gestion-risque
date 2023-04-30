import { Component, OnInit } from '@angular/core';
import { AnalysePortfeuilleServicesService } from 'src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service';
import { IndicateurService } from 'src/app/_services/indicateur.service';
import { RisqueLiquiditeService } from 'src/app/_services/risque-liquidite.service';

@Component({
  selector: 'app-consultation-ratio2-liquidite',
  templateUrl: './consultation-ratio2-liquidite.component.html',
  styleUrls: ['./consultation-ratio2-liquidite.component.css']
})
export class ConsultationRatio2LiquiditeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    

}
}