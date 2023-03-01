import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-impaye-milliards-chart',
  templateUrl: './impaye-milliards-chart.component.html',
  styleUrls: ['./impaye-milliards-chart.component.css']
})
export class ImpayeMilliardsChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }

  chart: any;

  data = [1.11,1.03,0.91,0.81,1.31,1.49,1.27,1.42,0.996,0.528];
  labels = ['12-19', '01-22', '02-22', '03-22', '04-22', '05-22', '06-22','07-22','08-22','09-22'];
  createChart() {
    this.chart = new Chart('impaye en milliards de DZ ', {
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
            backgroundColor: 'blue',
            borderColor: 'blue',
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
            text: 'Impaye en milliards de DZ',
            padding: {
              bottom: 10,
              top: 10,
            },
          },
          legend: {
            align: 'center',
            position: 'bottom',
            labels: {
              boxHeight:1,
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



