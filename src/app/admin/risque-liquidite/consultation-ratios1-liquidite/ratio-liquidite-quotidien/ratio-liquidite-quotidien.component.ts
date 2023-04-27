import { Component, OnInit } from '@angular/core';


import {  ChartOptions } from 'chart.js';
import { RisqueLiquiditeService } from 'src/app/_services/risque-liquidite.service';
import { AnalysePortfeuilleServicesService } from 'src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service';
@Component({
  selector: 'app-ratio-liquidite-quotidien',
  templateUrl: './ratio-liquidite-quotidien.component.html',
  styleUrls: ['./ratio-liquidite-quotidien.component.css']
})
export class RatioLiquiditeQuotidienComponent implements OnInit {
  
  chartData = [];

  chartLabels = [];
 
   lineChartOptions: ChartOptions = {
    elements: {
      point: {
        radius: 3,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Ratios de liquidité quotidien ",
        padding: {
          bottom: 20,
          top: 20,
          
        },
      },
      legend: {
        align: 'center',
        position: 'bottom',
        labels: {
          boxHeight:0.5,
          font: {
            size: 10,
          },
        },
      },
    }
  };
  
  
  constructor(private risqueLiquiditeService: RisqueLiquiditeService, private servicesRepo: AnalysePortfeuilleServicesService) { }

  ngOnInit(): void {

        // Risque de liquidite code 6
     this.servicesRepo.currentAnalyseType = 6; 
    
    this.risqueLiquiditeService.getListRatiosEntreDeuxDates(2021,3).subscribe((res) =>{
      
      next:{
        const data : any[] = []
        const data_inf : any[] = []
        const data_sup : any[] = []
       
        for (let i=0;i<res.length;i++){
          console.log('res '+res[i][1])
          this.chartLabels.push(res[i][0])
          data.push(res[i][1])
        }
        for (let i=0;i<res.length;i++){
          data_inf.push(100)
          data_sup.push(110)
        }
        this.chartData.push({ data:data_inf, label:'Limite inferieure', borderColor:'green'})
        this.chartData.push({ data:data, label:'Ratio', borderColor:'blue'})
        this.chartData.push({ data:data_sup, label:'Limite superieure', borderColor:'red'})

      }
    })
    
  }

}
