import { Component, OnInit, ViewChild } from '@angular/core';


import {  ChartOptions } from 'chart.js';
import { RisqueLiquiditeService } from 'src/app/_services/risque-liquidite.service';
import { AnalysePortfeuilleServicesService } from 'src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-ratio-liquidite-quotidien',
  templateUrl: './ratio-liquidite-quotidien.component.html',
  styleUrls: ['./ratio-liquidite-quotidien.component.css']
})
export class RatioLiquiditeQuotidienComponent implements OnInit {
   @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  chartData = [];

  chartLabels = [];
 
   lineChartOptions: ChartOptions = {
    responsive: true,
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
    
    this.risqueLiquiditeService.getListRatiosEntreDeuxDates(2021,3).subscribe({
      
      next: (res) => {
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
       this.refresh_chart();
      },
     
    })

 

    // this.chartData.push({ data:[1,2,3,4] , label : 'Ratio', borderColor:'blue'})
    // this.chartLabels.push(1)
    // this.chartLabels.push(2)
    // this.chartLabels.push(3)
    // this.chartLabels.push(4)
  }

  refresh_chart() {
    setTimeout(() => {
       
        if (this.chart && this.chart.chart && this.chart.chart.config) {
            this.chart.chart.config.data.labels = this.chartLabels;
            this.chart.chart.config.data.datasets = this.chartData;
            this.chart.chart.update();
        }
    });
}

}
