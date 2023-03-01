import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-par-type-engagement',
  templateUrl: './par-type-engagement.component.html',
  styleUrls: ['./par-type-engagement.component.css'],
})
export class ParTypeEngagementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  chart: any;

  data = [41.89, 40.16, 42.15, 40.75, 41.33, 40.86, 36.21];
  labels = ['12-19', '01-22', '02-22', '03-22', '04-22', '05-22', '06-22'];

  data1 = [31.89, 30.16, 32.15, 30.75, 31.33, 30.86, 26.21];
  labels1 = ['12-19', '01-22', '02-22', '03-22', '04-22', '05-22', '06-22'];

  data2 = [1.89, 1.16, 1.15, 1.75, 1.33, 1.86, 1.21];
  labels2 = ['12-19', '01-22', '02-22', '03-22', '04-22', '05-22', '06-22'];
  createChart() {
    this.chart = new Chart('parEngagement', {
      type: 'line',

      data: {
        labels: this.labels,
        datasets: [
          {
            datalabels: {
              anchor: 'end',
              align: 'top',
              backgroundColor: 'orange',
              opacity: 0.7,
              color: 'white',
            },
            tension: 0.1,
            label: 'Comptes Débiteurs',
            data: this.data,
            backgroundColor: 'orange',
            borderColor: 'orange',
          },
          {
            datalabels: {
              anchor: 'end',
              align: 'top',
              backgroundColor: 'blue',
              opacity: 0.7,
              color: 'white',
            },
            tension: 0.1,
            label: 'Crédit et Effets',
            data: this.data1,
            backgroundColor: 'blue',
            borderColor: 'blue',
          },
          {
            datalabels: {
              anchor: 'end',
              align: 'top',
              backgroundColor: 'gray',
              opacity: 0.7,
              color: 'white',
            },
            tension: 0.1,
            label: 'Crédit immobiliers',
            data: this.data2,
            backgroundColor: 'gray',
            borderColor: 'gray',
          },
        ],
      },
      options: {
        elements: {
          point: {
            radius: 0,
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Portefeuil direct par type d'engagement en milliards en DZD",
            padding: {
              bottom: 30,
              top: 10,
            },
          },
          legend: {
            align: 'center',
            position: 'bottom',
            labels: {
              boxHeight: 2,
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
            grace: 1,
            ticks: {
              stepSize: 5,
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
