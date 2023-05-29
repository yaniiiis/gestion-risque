import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { PortefeuilDirectService } from "src/app/_services/PortefeuilleService/portefeuille-direct.service";
import { PortefeuilleResponse } from "src/app/Models/PortefeuileResponse";
import { Subscription } from "rxjs";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { ChartOptions } from "chart.js";
@Component({
  selector: "app-graphe-chart",
  templateUrl: "./graphe-chart.component.html",
  styleUrls: ["./graphe-chart.component.css"],
})
export class GrapheChartComponent implements OnInit {
  dataChart: any = [];
  labelsChart: any = [];
  public implementedChartData = [];

  @Input() grapheParametre: any = "";
  @Input() CurrentType: string;
  @Input() LabelTextValue: string = "";

  @Input("fromDate") fromDate;
  @Input("toDate") toDate;

  LabelChartTitle: string = "";
  chartTitle: string;
  lineChartLegend = true;
  lineChartType = "line";
  lineChartPlugins = [ChartDataLabels];

  taux_de_defaut = {
    data: [4.52, 4.52, 4.49, 4.66, 4.68, 4.62, 4.85, 4.81, 4.71, 4.69],
    labels: [
      "12-19",
      "01-22",
      "02-22",
      "03-22",
      "04-22",
      "05-22",
      "06-22",
      "07-22",
      "08-22",
      "09-22",
    ],
  };
  parTypeEnagagement = {
    datachart: [
      {
        data1: [41.89, 40.16, 42.15, 40.75, 41.33, 40.86, 36.21],
        label: "Account A",
      },
      // ,{

      //   data2:[31.89, 30.16, 32.15, 30.75, 31.33, 30.86, 26.21],
      //   label: 'Account B'
      // },
      // {
      //   data3:[1.89, 1.16, 1.15, 1.75, 1.33, 1.86, 1.21],
      //   label: 'Account C'

      // }
    ],

    labels: ["12-19", "01-22", "02-22", "03-22", "04-22", "05-22", "06-22"],
  };
  ImpayeEnMilliardDz = {
    data: [1.11, 1.03, 0.91, 0.81, 1.31, 1.49, 1.27, 1.42, 0.996, 0.528],
    labels: [
      "12-19",
      "01-22",
      "02-22",
      "03-22",
      "04-22",
      "05-22",
      "06-22",
      "07-22",
      "08-22",
      "09-22",
    ],
  };

  chart: any;

  lineChartData: Array<any> = [
    {
      data: this.dataChart,
      datalabels: {
        anchor: "end",
        align: "top",
      },
      backgroundColor: ["red", "green", "blue", "orange"],
      hoverBackgroundColor: ["darkred", "darkgreen", "darkblue", "darkorange"],
      borderColor: "blue",
    },
  ];

  //Labels shown on the x-axis
  lineChartLabels: Array<any> = this.labelsChart;
  // Define chart options
  lineChartOptions: ChartOptions = {
    elements: {
      point: {
        radius: 3,
      },
    },
    plugins: {
      title: {
        display: true,
        text: this.LabelTextValue,
        padding: {
          bottom: 20,
          top: 20,
        },
      },
      legend: {
        align: "center",
        position: "bottom",
        labels: {
          boxHeight: 0.5,
          font: {
            size: 10,
          },
        },
      },
    },
  };

  constructor(private portefeuilleDirectService: PortefeuilDirectService) {}

  creditDirectHasError: boolean = false;
  creditNetSubscription: Subscription;

  ngOnInit(): void {
    this.lineChartData[0].label = this.LabelTextValue;
    this.lineChartOptions.plugins.title.text = this.LabelTextValue;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["LabelTextValue"] && changes["LabelTextValue"] !== undefined) {
      this.LabelTextValue = changes["LabelTextValue"].currentValue;
      this.LabelChartTitle = this.LabelTextValue;
    }

    if (changes["grapheParametre"]) {
      // setting grapheParametre to the new value
      this.grapheParametre = changes["grapheParametre"].currentValue;
      // updating graph data
      switch (this.grapheParametre) {
        case "credit_Net":
          console.log("this.fromDate : " + this.fromDate);
          console.log("this.toDate : " + this.toDate);
          this.implementedChartData = [];
          this.creditNetSubscription = this.portefeuilleDirectService
            .creditNet(this.fromDate, this.toDate, "28", "FUND", "Retail")
            .subscribe({
              next: (response: any) => {
                this.creditDirectHasError = false;
                if (!this.implementedChartData.includes("credit_Net")) {
                  this.implementChartData(response);
                  this.implementedChartData.push("credit_Net");
                }
              },
              error: (error: Error) => {
                this.creditDirectHasError = false;
                console.log("error from api ", error);
              },
            });
          break;
        case "taux_de_defaux":
          this.taux_de_defaut.data.forEach((e) => {
            this.dataChart.push(e);
          });
          this.taux_de_defaut.labels.forEach((e) => {
            this.labelsChart.push(e);
          });
          //
          break;
        case "Evolution_Direct":
          this.implementedChartData = [];
          this.creditNetSubscription = this.portefeuilleDirectService
            .evolutionDirect(this.fromDate, this.toDate, "28", "FUND", "Retail")
            .subscribe({
              next: (response: any) => {
                console.log("response " + response);
                this.creditDirectHasError = false;
                if (!this.implementedChartData.includes("Evolution_Direct")) {
                  this.implementChartData(response);
                  this.implementedChartData.push("Evolution_Direct");
                }
              },
              error: (error: Error) => {
                this.creditDirectHasError = false;
                console.log("error from api ", error);
              },
            });
          break;
        case "Impaye_en_milliards_de_DZ":
          this.ImpayeEnMilliardDz.data.forEach((e) => {
            this.dataChart.push(e);
          });
          this.ImpayeEnMilliardDz.labels.forEach((e) => {
            this.labelsChart.push(e);
          });
          break;
        case "Par_type_engagement":
          this.parTypeEnagagement.datachart.forEach((e) => {
            e.data1.forEach((ele) => {
              console.log(ele);
            });
          });
          console.log(this.dataChart);

          this.parTypeEnagagement.labels.forEach((e) => {
            this.labelsChart.push(e);
          });
          break;
      }
    }

    if (changes["CurrentType"] && changes["CurrentType"] !== undefined) {
      this.CurrentType = changes["CurrentType"].currentValue;
      this.lineChartType = this.CurrentType;
    }
  }

  implementChartData(response: PortefeuilleResponse[]) {
    let arrayToSort: { sum: number; reportingDate: Date }[] = [];
    response.forEach((element: PortefeuilleResponse) => {
      const [year, month] = element.reportingDate.split("-");
      const date = new Date(Number(year), Number(month) - 1);

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
      this.labelsChart.push(label);
      this.dataChart.push((element.sum / 1000000000).toFixed(2));
    });
  }
}
