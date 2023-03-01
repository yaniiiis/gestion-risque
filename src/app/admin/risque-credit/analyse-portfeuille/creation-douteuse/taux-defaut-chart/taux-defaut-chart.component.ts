import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-taux-defaut-chart',
  templateUrl: './taux-defaut-chart.component.html',
  styleUrls: ['./taux-defaut-chart.component.css']
})
export class TauxDefautChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }

  chart: any;

  data = [4.52, 4.52, 4.49, 4.66, 4.68, 4.62, 4.85 ,4.81 ,4.71, 4.69];
  labels = ['12-19', '01-22', '02-22', '03-22', '04-22', '05-22', '06-22','07-22','08-22','09-22'];
  createChart() {
    this.chart = new Chart('taux-default-chart', {
      type: 'line',

      data: {
        labels: this.labels,
        datasets: [
          {
            datalabels: {
              anchor: 'end',
              align: 'top',
            },
            tension:0,
            label: 'Evolution',
            data: this.data,
            backgroundColor: 'gray',
            borderColor: 'gray',
          },
        ],
      },
      options: {
        elements: {
          point: {
            radius: 2,
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'taux de défaut',
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
        },
        scales: {
          xAxes: {
            offset: true,
          },

          y: {
         
            beginAtZero: false,
            grace:0,
            ticks: {
              stepSize: 0.1,
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


