import { Component, OnInit } from '@angular/core';
import { AnalysePortfeuilleServicesService } from 'src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service';
import { IndicateurService } from 'src/app/_services/indicateur.service';
import { RisqueLiquiditeService } from 'src/app/_services/risque-liquidite.service';
interface Ratios{
  
          value: number,
          limit: number,
          label: string,
          min: number,
          unit: string,
}
interface Indicateur{
  id: number,
  description: string,
  valeurMinimum: number,
  valeurLimite: number,
  dateEffet : Date
}
@Component({
  selector: 'app-consultation-r6',
  templateUrl: './consultation-r6.component.html',
  styleUrls: ['./consultation-r6.component.css']
})
export class ConsultationR6Component implements OnInit {

  constructor(private indicateurService: IndicateurService, 
              private risqueLiquiditeService: RisqueLiquiditeService,
              private servicesRepo: AnalysePortfeuilleServicesService) { }
 selectedDate = '2021-03-31';
  data: Ratios[] = [];
  indicateur : Indicateur ={
    id:0,
    description:"",
    dateEffet: null,
    valeurLimite:0,
    valeurMinimum:0,    
  }
     header: string[] = [
   
    "Limit",
    "Trigger",
    "Rating",
   
  ];             
  ngOnInit(): void {
     // Risque de liquidite code 6
     this.servicesRepo.currentAnalyseType = 6;  


      // Recuperation des parametres des indicateurs

      //Ratio6 : Investissement sous forme de placements interbancaires
           this.indicateurService.getIndicateurById(23).subscribe((data) =>{
           this.indicateur = data;
          }) 

       this.indicateurService.getIndicateurById(23).subscribe({
              next: (response) =>{

               
                  // recuperation de la valeur de l'indicateur du backend
                  // R2- Actif liquide / Total Actif
                  this.risqueLiquiditeService.getRatio6InvestissementSousFormeDePlacementsInterbancaires(this.selectedDate).subscribe({
                    next: (result) =>{
                      const a ={
                      value: result,
                      limit: response.valeur_limite,
                      label: response.description,
                      min: response.valeur_minimum,
                      unit: '%' 
                    }
                    console.log('result : '+result)
                    this.data.push(a)
                    }
                  })
                }
              }) 
  }

}
