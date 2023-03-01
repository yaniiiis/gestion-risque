import { Component, OnInit } from "@angular/core";
import { PortefeuilleResponse } from "src/app/Models/PortefeuileResponse";
import { PortefeuilDirectService } from "src/app/_services/PortefeuilleService/portefeuille-direct.service";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Subscription } from "rxjs";

@Component({
  selector: "app-credit-net",
  templateUrl: "./credit-net.component.html",
  styleUrls: ["./credit-net.component.css"],
})
export class CreditNetComponent implements OnInit {
  constructor(private portefeuilleDirectService: PortefeuilDirectService) {}

  data = [];
  labels = [];
  creditDirectHasError: boolean = false;
  creditNetSubscription: Subscription;
  chart: any;

  ngOnInit(): void {
    this.creditNetSubscription = this.portefeuilleDirectService
      .creditNet("2020-06-10", "2022-08-20")
      .subscribe({
        next: (response: any) => {
          this.creditDirectHasError = false;
          this.implementChartData(response);
          this.createChart();
        },
        error: (error: Error) => {
          this.creditDirectHasError = false;
          console.log("error from api ", error);
        },
      });
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
      let month = date.getMonth() + 1;
      const monthAsString =
        month.toString().length > 1 ? month : "0" + month.toString();
      const label = year + "/" + monthAsString;
      this.labels.push(label);
      this.data.push((element.sum / 1000000000).toFixed(2));
    });
  }

  createChart() {
    this.chart = new Chart("creditNet", {
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
            label: "Crédit net",
            data: this.data,
            backgroundColor: "orange",
            borderColor: "orange",
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Crédit Direct Net d'Interets Réservés en milliards de DZD",
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
