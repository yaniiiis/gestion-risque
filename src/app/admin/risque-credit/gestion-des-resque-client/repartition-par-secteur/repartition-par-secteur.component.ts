import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { Router } from "@angular/router";
import { AllSelected } from "src/app/Models/AllSelected";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { ClientService } from "src/app/_services/Client/client.service";
import { StorageSService } from "src/app/_services/storageService/storage-s.service";

@Component({
  selector: "app-repartition-par-secteur",
  templateUrl: "./repartition-par-secteur.component.html",
  styleUrls: ["./repartition-par-secteur.component.css"],
})
export class RepartitionParSecteurComponent implements OnInit {
  public data = [];
  public data1 = [];
  public errormessage!: string;

  dateTransforme: string;
  event: string;

  selectedDate: string;
  selectedDateNmoinsUn: string;
  public availablePeriods: string[] = [];

  constructor(
    private clientService: ClientService,
    private storageService: StorageSService,
    private servicesRepo: AnalysePortfeuilleServicesService
  ) {}

  ngOnInit(): void {
    this.availablePeriods = this.servicesRepo.availablePeriods;
  }

  findClientsBySecteurAndPeriod() {
    var datePipe = new DatePipe("en-US");
    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    this.clientService
      .findGroupedBySecteurByPeriode(this.dateTransforme)
      .subscribe((response) => {
        this.data = [];
        this.data = response;
      });
  }

  findTotalTauxsBySecteurAndPeriod() {
    var datePipe = new DatePipe("en-US");
    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    this.clientService
      .findTotalTauxBySecteurByPeriode(this.dateTransforme)
      .subscribe((response) => {
        this.data1 = [];
        this.data1 = response;
      });
  }

  findTauxsBySecteurAndPeriod() {
    var datePipe = new DatePipe("en-US");
    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    this.clientService
      .findTauxBySecteurByPeriode(this.dateTransforme)
      .subscribe((response) => {
        this.data = [];
        this.data = response;
      });
  }

  findTotalClientsBySecteurAndPeriod() {
    var datePipe = new DatePipe("en-US");
    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    this.clientService
      .findTotalGroupedBySecteurByPeriode(this.dateTransforme)
      .subscribe((response1) => {
        this.data1 = [];
        this.data1 = response1;
      });
  }

  onDateSelection() {
    this.servicesRepo.selectedDate = this.selectedDate;
    var date1: Date;
    date1 = new Date(this.selectedDate);

    const year = date1.getFullYear() - 1;
    const month = (date1.getMonth() + 1).toString();
    const month1 = month.padStart(2, "0");
    const day = date1.getUTCDate();

    this.selectedDateNmoinsUn = year + "-" + month1 + "-" + day;
    // this.findClientsBySecteurAndPeriod();
    // this.findTotalClientsBySecteurAndPeriod();
    this.findTotalTauxsBySecteurAndPeriod();
    this.findTauxsBySecteurAndPeriod();
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    var datePipe = new DatePipe("en-US");
    this.event = `${event.value}`;
    this.dateTransforme = datePipe.transform(this.event, "yyyy-MM-dd");
    //  console.log("sel date : " + this.dateTransforme);

    this.servicesRepo.selectedDate = this.selectedDate;
    var date1: Date;
    date1 = new Date(this.selectedDate);

    const year = date1.getFullYear() - 1;
    const month = (date1.getMonth() + 1).toString();
    const month1 = month.padStart(2, "0");
    const day = date1.getUTCDate() + 1;

    this.selectedDateNmoinsUn = day + "-" + month1 + "-" + year;

    this.findTotalTauxsBySecteurAndPeriod();
    this.findTauxsBySecteurAndPeriod();
  }
}
