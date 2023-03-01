import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { ClientService } from "src/app/_services/Client/client.service";

@Component({
  selector: "app-action-de-recouverment",
  templateUrl: "./action-de-recouverment.component.html",
  styleUrls: ["./action-de-recouverment.component.css"],
})
export class ActionDeRecouvermentComponent implements OnInit {
  constructor(private clientService: ClientService) {}
  event: string;
  dateTransforme!: any;
  selectedDate: string;

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    var datePipe = new DatePipe("en-US");
    this.event = `${event.value}`;
    this.dateTransforme = datePipe.transform(this.event, "yyyy-MM-dd");

    this.clientService
      .findActionsDeRecouvrementByPeriode(this.dateTransforme)
      .subscribe({
        next: (data) => {
          this.Data = data;
        },
        error: (err) => {
          // this.errormessage = err.error.message;
          this.Data = [];
        },
      });
  }

  ngOnInit(): void {}

  Head: any = [
    "Date",
    "Agence",
    "Id Client",
    "Nom/Prenom/Raison social",
    "Engagements",
    "Impayés",
    "Provisions",
    "Intérets Réservé",
    "Autre Frais et Intérets",
    "Actions de Recouverments",
  ];
  Data: any = [];
}
