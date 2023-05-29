import { DatePipe } from "@angular/common";
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import moment from "moment";
import { Observable } from "rxjs";
import { RapportLiquiditeService } from "src/app/_services/RapportLiquiditeService/rapport-liquidite.service";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";

@Component({
  selector: "app-rapport-kris-liquidite",
  templateUrl: "./rapport-kris-liquidite.component.html",
  styleUrls: ["./rapport-kris-liquidite.component.css"],
})
export class RapportKrisLiquiditeComponent implements OnInit, OnChanges {
  selectedDate = "";
  dateTransforme: string = "2021-03-31";
  premierMoisDuTrimestre;
  deuxiemeMoisDuTrimestre;
  decembrePrecedent;

  header: string[] = ["Limit", "Trigger", "Rating"];
  data: Observable<any[]>;

  year: number;
  month: number;
  day: number;
  constructor(
    private servicesRepo: AnalysePortfeuilleServicesService,
    private rapportLiquiditeService: RapportLiquiditeService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes " + changes.selectedDate.currentValue);
    var datePipe = new DatePipe("en-US");

    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
  }

  addEvent(type: string, event: any) {
    var datePipe = new DatePipe("en-US");
    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    console.log("sele : " + this.dateTransforme);
    const myDate = moment(this.selectedDate, "YYYY-MM-DD").toDate();

    this.year = myDate.getFullYear();
    this.month = myDate.getMonth() - 1;
    this.day = this.lastday(myDate.getFullYear(), myDate.getMonth() - 1);

    this.deuxiemeMoisDuTrimestre =
      this.day.toString() +
      "/" +
      (this.month + 1).toString().padStart(2, "0") +
      "/" +
      this.year.toString();

    this.month = myDate.getMonth() - 2;
    this.day = this.lastday(myDate.getFullYear(), myDate.getMonth() - 2);

    this.premierMoisDuTrimestre =
      this.day.toString() +
      "/" +
      (this.month + 1).toString().padStart(2, "0") +
      "/" +
      this.year.toString();

    this.decembrePrecedent = "31/12/" + (this.year - 1).toString();

    this.data = this.rapportLiquiditeService.getRapportLiquiditeByDate(
      this.dateTransforme
    );
  }
  lastday = function (y, m) {
    return new Date(y, m + 1, 0).getDate();
  };

  ngOnInit(): void {
    // Risque de liquidite code 6
    this.servicesRepo.currentAnalyseType = 6;
  }

  ConvertStringToNumber(input: string) {
    if (input.trim().length == 0) {
      return NaN;
    }
    return Number(input);
  }
}
