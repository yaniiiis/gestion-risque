import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { Observable, map } from "rxjs";
import { RisqueDeMarcheService } from "src/app/_services/risque-de-marche.service";

@Component({
  selector: "app-surveillance-limite",
  templateUrl: "./surveillance-limite.component.html",
  styleUrls: ["./surveillance-limite.component.css"],
})
export class SurveillanceLimiteComponent implements OnInit {
  dateTransforme: string;
  event: string;

  selectedDate: string;
  Head = [
    "Date de placement",
    "Echéance de placement",
    "Bénéficiaire",
    "Type de placement",
    "Montant du placement",
    "Vérification type de placement",
    "Vérification de la durée du placement",
    "Vérification des plafonds",
  ];
  placements: Observable<any>;
  constructor(private risqueDeMarcheService: RisqueDeMarcheService) {}

  ngOnInit(): void {
    this.placements =
      this.risqueDeMarcheService.findRisqMarchePlacementByDate("2023-03-01");
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    var datePipe = new DatePipe("en-US");
    this.event = `${event.value}`;
    this.dateTransforme = datePipe.transform(this.event, "yyyy-MM-dd");
    //  console.log("sel date : " + this.dateTransforme);

    // this.servicesRepo.selectedDate = this.selectedDate;
    this.placements = this.risqueDeMarcheService.findRisqMarchePlacementByDate(
      this.dateTransforme
    );
  }
}
