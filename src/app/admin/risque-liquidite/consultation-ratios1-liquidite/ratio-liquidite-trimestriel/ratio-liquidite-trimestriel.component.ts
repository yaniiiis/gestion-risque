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
  selector: 'app-ratio-liquidite-trimestriel',
  templateUrl: './ratio-liquidite-trimestriel.component.html',
  styleUrls: ['./ratio-liquidite-trimestriel.component.css']
})

export class RatioLiquiditeTrimestrielComponent implements OnInit {

  data: Ratios[] = [];
  selectedDate = '2021-03-31';
  dateRelativeAuDeuxiemeMoisDuTrimestre = '2021-01-31';
  dateRelativeAuTroisiemeMoisDuTrimestre = '2021-02-28'

    indicateur : Indicateur ={
    id:0,
    description:"",
    dateEffet: null,
    valeurLimite:0,
    valeurMinimum:0,    
  }

  constructor(private indicateurService: IndicateurService, 
              private risqueLiquiditeService: RisqueLiquiditeService,
              private servicesRepo: AnalysePortfeuilleServicesService) { }

  ngOnInit(): void {

     // Risque de liquidite code 6
     this.servicesRepo.currentAnalyseType = 6;     

    // Recuperation des parametres des indicateurs
    
    for(let i=15;i<=18;i++){
        // Coefficient de liquidité à un mois (cf. modèle 5002)
        // Coefficient de liquidité d’observation (cf. modèle 5005)
        // Coefficient de liquidité relatif au deuxième mois du trimestre qui s’achève
        // Coefficient de liquidité relatif au troisième mois du trimestre qui s’achève
            this.indicateurService.getIndicateurById(i).subscribe({
              next: (response) =>{

                if (i==15){
                  // recuperation de la valeur de l'indicateur du backend
                  // Coefficient de liquidité à un mois (cf. modèle 5002)
                  this.risqueLiquiditeService.getRatiosByDate(this.selectedDate).subscribe({
                    next: (result) =>{
                      const a ={
                      value: Number.parseFloat(result[0][1]),
                      limit: response.valeur_limite,
                      label: response.description,
                      min: response.valeur_minimum,
                      unit: '%' 
                    }
                    console.log('result[0][1]'+result[0][1])
                    this.data.push(a)

                    }
                  })
                
              }
               if (i==16){
                  // recuperation de la valeur de l'indicateur du backend
                  // Coefficient de liquidité d’observation (cf. modèle 5005)
                  this.risqueLiquiditeService.getRatiosByDate(this.selectedDate).subscribe({
                    next: (result) =>{
                      const a ={
                      value: Number.parseFloat(result[0][2]),
                      limit: response.valeur_limite,
                      label: response.description,
                      min: response.valeur_minimum,
                      unit: '%' 
                    }
                    console.log('result[0][1]'+result[0][2])
                    this.data.push(a)

                    }
                  })
                
              }
              if (i==17){
                  // recuperation de la valeur de l'indicateur du backend
                  // Coefficient de liquidité relatif au deuxième mois du trimestre qui s’achève
                  this.risqueLiquiditeService.getRatiosByDate(this.dateRelativeAuDeuxiemeMoisDuTrimestre).subscribe({
                    next: (result) =>{
                      const a ={
                      value: Number.parseFloat(result[0][1]),
                      limit: response.valeur_limite,
                      label: response.description,
                      min: response.valeur_minimum,
                      unit: '%' 
                    }
                    console.log('result[0][1]'+result[0][1])
                    this.data.push(a)

                    }
                  })                
              }
               if (i==18){
                  // recuperation de la valeur de l'indicateur du backend
                  // Coefficient de liquidité relatif au troisieme mois du trimestre qui s’achève
                  this.risqueLiquiditeService.getRatiosByDate(this.dateRelativeAuTroisiemeMoisDuTrimestre).subscribe({
                    next: (result) =>{
                      const a ={
                      value: Number.parseFloat(result[0][1]),
                      limit: response.valeur_limite,
                      label: response.description,
                      min: response.valeur_minimum,
                      unit: '%' 
                    }
                    console.log('result[0][1]'+result[0][1])
                    this.data.push(a)

                    }
                  })                
              }
              }
            })
    }

     this.data = [
     // {
    //       value: 176  ,
    //       limit: 110,
    //       label: 'Coefficient de liquidité à un mois (cf. modèle 5002)',
    //       min: 100,
    //       unit: '%',},
    //       {
    //       value: 161  ,
    //       limit: 110,
    //       label: 'Coefficient de liquidité d’observation (cf. modèle 5005)',
    //       min: 100,
    //       unit: '%',},
          
    //       {
    //       value: 109  ,
    //       limit: 110,
    //       label: 'Coefficient de liquidité relatif au deuxième mois du trimestre qui s’achève',
    //       min: 100,
    //       unit: '%',},
    //       {
    //       value: 150  ,
    //       limit: 110,
    //       label: 'Coefficient de liquidité relatif au troisième mois du trimestre qui s’achève',
    //       min: 100,
    //       unit: '%',},
        ]

  }

}
