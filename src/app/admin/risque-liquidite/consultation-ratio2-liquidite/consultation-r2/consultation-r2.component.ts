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
  selector: 'app-consultation-r2',
  templateUrl: './consultation-r2.component.html',
  styleUrls: ['./consultation-r2.component.css']
})
export class ConsultationR2Component implements OnInit {
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
 
  constructor(private indicateurService: IndicateurService, 
              private risqueLiquiditeService: RisqueLiquiditeService,
              private servicesRepo: AnalysePortfeuilleServicesService) { }

  ngOnInit(): void {
        // Risque de liquidite code 6
     this.servicesRepo.currentAnalyseType = 6;  


      // Recuperation des parametres des indicateurs

      //Total position par devise
           this.indicateurService.getIndicateurById(19).subscribe((data) =>{
           this.indicateur = data;
          }) 

       this.indicateurService.getIndicateurById(19).subscribe({
              next: (response) =>{

               
                  // recuperation de la valeur de l'indicateur du backend
                  // R2- Actif liquide / Total Actif
                  this.risqueLiquiditeService.getRatioActifLiquideByDate(this.selectedDate).subscribe({
                    next: (result) =>{
                      const a ={
                      value: Number.parseFloat(result[0][3]),
                      limit: response.valeur_limite,
                      label: response.description,
                      min: response.valeur_minimum,
                      unit: '%' 
                    }
                    console.log('result[0][1]'+result[0][3])
                    this.data.push(a)
                    }
                  })                             

  }

  })
  }

}
