import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { BaseChartDirective } from "ng2-charts";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { RisqueLiquiditeService } from "src/app/_services/risque-liquidite.service";

import { ChartOptions } from "chart.js";

@Component({
  selector: "app-ratio-liquidite-quotidien-ratio",
  templateUrl: "./ratio-liquidite-quotidien-ratio.component.html",
  styleUrls: ["./ratio-liquidite-quotidien-ratio.component.css"],
})
export class RatioLiquiditeQuotidienRatioComponent
  implements OnInit, OnChanges
{
  @Input() year: number;
  @Input() month: number;
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
  constructor(
    private risqueLiquiditeService: RisqueLiquiditeService,
    private servicesRepo: AnalysePortfeuilleServicesService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.chartData = [];
    this.chartLabels = [];
    if (this.year != undefined && this.month != undefined)
      this.risqueLiquiditeService
        .getListRatiosEntreDeuxDates(this.year, this.month)
        .subscribe({
          next: (res) => {
            const data: any[] = [];
            const data_inf: any[] = [];
            const data_sup: any[] = [];

            for (let i = 0; i < res.length; i++) {
              console.log("res " + res[i][1]);
              this.chartLabels.push(res[i][0]);
              data.push(res[i][1]);
            }
            for (let i = 0; i < res.length; i++) {
              data_inf.push(100);
              data_sup.push(110);
            }
            console.log("Limite inferieure");
            this.chartData.push({
              data: data_inf,
              label: "Limite inferieure",
              borderColor: "green",
            });
            console.log("Limite superieure");
            this.chartData.push({
              data: data,
              label: "Ratio",
              borderColor: "blue",
            });
            this.chartData.push({
              data: data_sup,
              label: "Limite superieure",
              borderColor: "red",
            });
            console.log("before refresh");
            this.refresh_chart();
          },
        });
  }

  ngOnInit(): void {
    // Risque de liquidite code 6
    this.servicesRepo.currentAnalyseType = 6;
  }
  refresh_chart() {
    console.log("refresh");
    setTimeout(() => {
      if (this.chart && this.chart.chart && this.chart.chart.config) {
        this.chart.chart.config.data.labels = this.chartLabels;
        this.chart.chart.config.data.datasets = this.chartData;
        this.chart.chart.update();
      }
    });
  }
}
