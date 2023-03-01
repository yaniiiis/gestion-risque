import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-creance-douteuse-et-provision-chart',
  templateUrl: './creance-douteuse-et-provision-chart.component.html',
  styleUrls: ['./creance-douteuse-et-provision-chart.component.css']
})
export class CreanceDouteuseEtProvisionChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }

  chart: any;

  data = [1.864,1.894,1.861,1.868,1.898,1.856,1.852,1.829,1.822,1.812];
  labels = ['12-19', '01-22', '02-22', '03-22', '04-22', '05-22', '06-22','07-22','08-22','09-22'];

  data1 = [1.122,1.117,1.114,1.107,1.106,1.120,1.140,1.139,1.136,1.124];
  labels1 = ['12-19', '01-22', '02-22', '03-22', '04-22', '05-22', '06-22','07-22','08-22','09-22'];

  data2 = [0.632,0.644,0.652,0.667,0.679,0.689,0.701,0.711,0.720,0.729];
  labels2 = ['12-19', '01-22', '02-22', '03-22', '04-22', '05-22', '06-22','07-22','08-22','09-22'];
  createChart() {
    this.chart = new Chart('creance douteuse', {
      type: 'line',

      data: {
        labels: this.labels,
        datasets: [
          {
            datalabels: {
              anchor: 'end',
              align: 'top',
              color:'orange'
          
            },
            tension:0,
            label: "Creance douteuse nettes d'intérets réservés",
            data: this.data,
            backgroundColor: 'orange',
            borderColor: 'orange',
          },
          {
            datalabels: {
              anchor: 'end',
              align: 'top',
              color:'gray'
            },
            tension: 0,
            label: 'Provisions',
            data: this.data1,
            backgroundColor: 'gray ',
            borderColor: 'gray',
          },
          {
            datalabels: {
              anchor: 'end',
              align: 'bottom',
              color:'blue'
            },
            tension: 0.1,
            label: 'Intérets réservés des créances douteuse',
            data: this.data2,
            backgroundColor: 'blue',
            borderColor: 'blue',
          },
        ],
      },
      options: {
        elements: {
          point: {
            radius:3,
          },
        },
        
        plugins: {
          title: {
            display: true,
            text: "Portefeuil direct par type d'engagement en milliards en DZD",
            padding: {
              bottom: 20,
              top: 10,
            },
          },
          legend: {
            align: 'center',
            position: 'bottom',
            labels: {
              boxHeight: 1,
              font: {
                size: 11,
              },
            },
          },
        },
        scales: {
          xAxes: {
            offset: true,
          },

          y: {
            beginAtZero: false,
            grace: 0.5,
            ticks: {
              stepSize: 0.25,
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return value;
              },
            },
          },
        },
      },
      plugins: [ChartDataLabels],
    });
  }
}
