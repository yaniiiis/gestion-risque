import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-engagements',
  templateUrl: './engagements.component.html',
  styleUrls: ['./engagements.component.css'],
})
export class EngagementsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  getDataLabels(color: string, infos: string): any {
    return {
      anchor: 'end',
      align: 'top',
      font: {
        size: 9,
      },
      backgroundColor: 'transparent',
      labels: {
        index: {
          align: 'end',
          anchor: 'end',
          formatter: function (value: any, ctx: any) {
            switch (infos) {
              case 'caution':
                return value.depenses.caution;
              case 'lettre':
                return value.depenses.lettre;
              case 'avales':
                return value.depenses.avales;
              case 'total':
                return value.depenses.total;
              default:
                return;
            }
          },
          color: color,
        },
      },
    };
  }

  chart: any;

  myJson = [
    {
      periode: '12-19',
      depenses: { caution: 3.27, lettre: 7.32, avales: 0.52, total: 7.25 },
    },
    {
      periode: '01-20',
      depenses: { caution: 3.32, lettre: 6.41, avales: 0.87, total: 10.52 },
    },
    {
      periode: '02-20',
      depenses: { caution: 3.54, lettre: 7.21, avales: 0.31, total: 8.55 },
    },
    {
      periode: '03-20',
      depenses: { caution: 3.28, lettre: 5.25, avales: 0.78, total: 8.25 },
    },
    {
      periode: '04-20',
      depenses: { caution: 3.17, lettre: 4.78, avales: 1.11, total: 9.5 },
    },
    {
      periode: '05-20',
      depenses: { caution: 3.11, lettre: 6.12, avales: 1.15, total: 7.32 },
    },
    {
      periode: '06-20',
      depenses: { caution: 2.99, lettre: 4.58, avales: 0.82, total: 8.11 },
    },
  ];
  createChart() {
    this.chart = new Chart('engagement', {
      type: 'bar',
      data: {
        datasets: [
          {
            datalabels: this.getDataLabels('blue', 'caution'),
            data: this.myJson,
            label: 'Cautions émises',
            backgroundColor: 'blue',
            borderColor: 'blue',
            parsing: {
              yAxisKey: 'depenses.caution',
            },
          },
          {
            datalabels: this.getDataLabels('orange', 'lettre'),
            label: 'Lettre de crédits documentaires',
            data: this.myJson,
            backgroundColor: 'orange',
            borderColor: 'orange',
            parsing: {
              yAxisKey: 'depenses.lettre',
            },
          },

          {
            datalabels: this.getDataLabels('gray', 'avales'),
            label: 'Avals et acceptations',
            data: this.myJson,
            backgroundColor: 'gray',
            borderColor: 'gray',
            parsing: {
              yAxisKey: 'depenses.avales',
            },
          },
          {
            datalabels: this.getDataLabels('green', 'total'),
            label: 'Total',
            data: this.myJson,
            backgroundColor: 'green',
            borderColor: 'green',
            parsing: {
              yAxisKey: 'depenses.total',
            },
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Les engagements indirects (Hors bilan) en milliards de DZD',
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
        parsing: {
          xAxisKey: 'periode',
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 2,
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
