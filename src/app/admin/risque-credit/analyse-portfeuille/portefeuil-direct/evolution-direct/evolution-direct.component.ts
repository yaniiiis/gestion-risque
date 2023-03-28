import { Component, OnInit } from "@angular/core";
import { PortefeuilleResponse } from "src/app/Models/PortefeuileResponse";
import { PortefeuilDirectService } from "src/app/_services/PortefeuilleService/portefeuille-direct.service";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Subscription } from "rxjs";

@Component({
  selector: "app-evolution-direct",
  templateUrl: "./evolution-direct.component.html",
  styleUrls: ["./evolution-direct.component.css"],
})
export class EvolutionDirectComponent implements OnInit {
  constructor(private portefeuilleDirectService: PortefeuilDirectService) {}

  evolutionDirectHasError: boolean = false;
  evolutionDirectSubscription: Subscription;
  data = [];
  labels = [];
  chart: any;

  ngOnInit(): void {
    this.evolutionDirectSubscription = this.portefeuilleDirectService
      .evolutionDirect("2020-06-10", "2022-08-20", "28", "FUND", "Retail")
      .subscribe({
        next: (response: PortefeuilleResponse[]) => {
          this.evolutionDirectHasError = false;
          this.implementChartData(response);
          this.createChart();
        },
        error: (error: Error) => {
          this.evolutionDirectHasError = false;
        },
      });
  }
  ngOnDestroy(): void {
    this.evolutionDirectSubscription.unsubscribe();
  }

  implementChartData(response: PortefeuilleResponse[]) {
    let arrayToSort: { sum: number; reportingDate: Date }[] = [];
    response.forEach((element: PortefeuilleResponse) => {
      const [year, month, day] = element.reportingDate.split("/");
      const date = new Date(Number(year), Number(month) - 1, Number(day));

      arrayToSort.push({
        sum: element.sum,
        reportingDate: date,
      });
    });

    const sortedArray = arrayToSort.sort(function (a, b) {
      return Number(a.reportingDate) - Number(b.reportingDate);
    });
    sortedArray.forEach((element) => {
      const date = element.reportingDate;
      const year = date.getUTCFullYear();
      const month = date.getMonth() + 1;
      const monthAsString =
        month.toString().length > 1 ? month : "0" + month.toString();
      const label = year + "/" + monthAsString;
      this.labels.push(label);
      this.data.push((element.sum / 1000000000).toFixed(2));
    });
  }

  createChart() {
    this.chart = new Chart("evolutionDirect", {
      type: "line",

      data: {
        labels: this.labels,
        datasets: [
          {
            datalabels: {
              anchor: "end",
              align: "top",
            },
            tension: 0.1,
            label: "Evolution",
            data: this.data,
            backgroundColor: "blue",
            borderColor: "blue",
          },
        ],
      },
      options: {
        elements: {},
        plugins: {
          title: {
            display: true,
            text: "Evolutions du portefeuile directs en milliards de DZD",
            padding: {
              bottom: 30,
              top: 10,
            },
          },
          legend: {
            align: "center",
            position: "bottom",
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
            grid: {
              display: false,
            },
          },
          yAxes: {
            offset: true,
            angleLines: {
              display: false,
            },
            grid: {
              display: false,
            },
          },

          y: {
            beginAtZero: false,
          },
        },
      },
      plugins: [ChartDataLabels],
    });
  }
}
