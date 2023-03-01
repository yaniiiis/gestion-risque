import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css'],
})
export class EvolutionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  chart: any;

  myJson = [
    {
      periode: '12-19',
      depenses: { caution: 3.27, lettre: 7.32, avales: 0.52, total: 8.25 },
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
      depenses: { caution: 3.28, lettre: 5.25, avales: 0.78, total: 8.5 },
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
    this.chart = new Chart('evolution', {
      type: 'line',

      data: {
        // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            tension: 0.1,
            label: 'Cautions émises',
            data: this.myJson,
            backgroundColor: 'blue',
            borderColor: 'blue',
            parsing: {
              yAxisKey: 'depenses.caution',
            },
          },
          {
            tension: 0.1,
            label: 'Lettre de crédits documentaires',
            data: this.myJson,
            backgroundColor: 'orange',
            borderColor: 'orange',
            parsing: {
              yAxisKey: 'depenses.lettre',
            },
          },
          {
            tension: 0.1,
            label: 'Avals et acceptations',
            data: this.myJson,
            backgroundColor: 'gray',
            borderColor: 'gray',
            parsing: {
              yAxisKey: 'depenses.avales',
            },
          },
          {
            tension: 0.1,
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
        elements: {
          point: {
            radius: 0,
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Evolutions des engagements indirects en milliards de DZD',
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
          xAxes: {
            offset: true,
          },
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
      //plugins: [ChartDataLabels],
    });
  }
}
