import { Component, OnInit } from '@angular/core';
import { AnalysePortfeuilleServicesService } from 'src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service';
import { IndicateurService } from 'src/app/_services/indicateur.service';
import { RisqueLiquiditeService } from 'src/app/_services/risque-liquidite.service';

interface indicateur{
  id: number,
  description: string,
  valeurMinimum: number,
  valeurLimite: number,
  dateEffet : Date
}

interface Ratios{
  
          value: number,
          limit: number,
          label: string,
          min: number,
          unit: string,
}
@Component({
  selector: 'app-ratio-liquidite-mensuel',
  templateUrl: './ratio-liquidite-mensuel.component.html',
  styleUrls: ['./ratio-liquidite-mensuel.component.css']
})
export class RatioLiquiditeMensuelComponent implements OnInit {
   header: string[] = [
   
    "Limit",
    "Trigger",
    "Rating",
   
  ];
   data: Ratios[] = [];
   indicateur1 : indicateur ={
    id:0,
    description:"",
    dateEffet: null,
    valeurLimite:0,
    valeurMinimum:0,
    
  }

  constructor(private indicateurService: IndicateurService, 
              private servicesRepo: AnalysePortfeuilleServicesService,
              private risqueLiquiditeService: RisqueLiquiditeService) { }

  ngOnInit(): void {
    //Coeficient de liquidité
           this.indicateurService.getIndicateurById(14).subscribe({
            next :(data) =>{
           this.indicateur1 = data;

            // calcul de la valeur de l'indicateur R1- Coefficient de liquidité
    
            this.risqueLiquiditeService.getRatiosByDate("2021-03-31").subscribe(
              {
              next: (result) => {
                const a = {
                  value: Number.parseFloat(result[0][1])  ,
                  limit: data.valeurLimite,
                  label: '',
                  min: data.valeurMinimum,
                  unit: '%',}
              console.log(result[0][1]);
                this.data.push(a)
          }
        })

          }}) 

      // Risque de liquidite code 6
     this.servicesRepo.currentAnalyseType = 6;       

    
  }
  

}
