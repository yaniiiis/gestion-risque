import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { ClientService } from "src/app/_services/Client/client.service";

@Component({
  selector: "app-repartition-par-zone",
  templateUrl: "./repartition-par-zone.component.html",
  styleUrls: ["./repartition-par-zone.component.css"],
})
export class RepartitionParZoneComponent implements OnInit {
  public availablePeriods: string[] = [];

  event1: string;
  event2: string;
  event3: string;

  dateTransforme: string;

  selectedDate: string;
  selectedDate1: string;
  selectedDate2: string;
  selectedDate3: string;

  public data = [];
  public data1 = [];
  public data2 = [];
  public data3 = [];

  public tdata1 = [];
  public tdata2 = [];
  public tdata3 = [];

  public zones = ["CENTRE", "EST", "OUEST", "AUTRES"];

  constructor(
    private servicesRepo: AnalysePortfeuilleServicesService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.availablePeriods = this.servicesRepo.availablePeriods;
  }

  findClientsByZoneAndPeriod(numero: number) {
    var datePipe = new DatePipe("en-US");
    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    this.clientService
      .findGroupedByZoneByPeriode(this.dateTransforme)
      .subscribe((response) => {
        if (numero === 1) this.data1 = response;
        else if (numero === 2) this.data2 = response;
        else if (numero === 3) this.data3 = response;
      });
  }
  findTotalClientsByZoneAndPeriod(numero: number) {
    var datePipe = new DatePipe("en-US");
    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    this.clientService
      .findTotalGroupedByZoneByPeriode(this.dateTransforme)
      .subscribe((response) => {
        if (numero === 1) this.tdata1 = response;
        else if (numero === 2) this.tdata2 = response;
        else if (numero === 3) this.tdata3 = response;
      });
  }

  findTauxClientsByZoneAndPeriod(numero: number) {
    var datePipe = new DatePipe("en-US");
    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");
    this.clientService
      .findTauxGroupedByZoneByPeriode(this.dateTransforme)
      .subscribe((response) => {
        if (numero === 1) this.tdata1 = response;
        else if (numero === 2) this.tdata2 = response;
        else if (numero === 3) this.tdata3 = response;
      });
  }

  onDateSelection1() {
    this.selectedDate = this.selectedDate1;
    this.findClientsByZoneAndPeriod(1);
    this.findTauxClientsByZoneAndPeriod(1);
  }
  onDateSelection2() {
    this.selectedDate = this.selectedDate2;
    this.findClientsByZoneAndPeriod(2);
    this.findTauxClientsByZoneAndPeriod(2);
  }
  onDateSelection3() {
    this.selectedDate = this.selectedDate3;
    this.findClientsByZoneAndPeriod(3);
    this.findTauxClientsByZoneAndPeriod(3);
  }

  addEvent1(type: string, event: MatDatepickerInputEvent<Date>) {
    var datePipe = new DatePipe("en-US");
    this.event1 = `${event.value}`;
    this.dateTransforme = datePipe.transform(this.event1, "yyyy-MM-dd");

    this.servicesRepo.selectedDate = this.selectedDate1;
    var date1: Date;
    date1 = new Date(this.selectedDate1);

    this.selectedDate = this.selectedDate1;
    this.findClientsByZoneAndPeriod(1);
    this.findTauxClientsByZoneAndPeriod(1);
  }
  addEvent2(type: string, event: MatDatepickerInputEvent<Date>) {
    var datePipe = new DatePipe("en-US");
    this.event2 = `${event.value}`;
    this.dateTransforme = datePipe.transform(this.event2, "yyyy-MM-dd");

    this.servicesRepo.selectedDate = this.selectedDate2;
    var date1: Date;
    date1 = new Date(this.selectedDate2);

    this.selectedDate = this.selectedDate2;
    this.findClientsByZoneAndPeriod(2);
    this.findTauxClientsByZoneAndPeriod(2);
  }

  addEvent3(type: string, event: MatDatepickerInputEvent<Date>) {
    var datePipe = new DatePipe("en-US");
    this.event3 = `${event.value}`;
    this.dateTransforme = datePipe.transform(this.event3, "yyyy-MM-dd");

    this.servicesRepo.selectedDate = this.selectedDate3;
    var date1: Date;
    date1 = new Date(this.selectedDate3);

    this.selectedDate = this.selectedDate3;
    this.findClientsByZoneAndPeriod(3);
    this.findTauxClientsByZoneAndPeriod(3);
  }
}
