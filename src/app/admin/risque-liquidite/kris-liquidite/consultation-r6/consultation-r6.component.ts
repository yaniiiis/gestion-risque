import { Component, OnInit } from "@angular/core";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { IndicateurService } from "src/app/_services/indicateur.service";
import { RisqueLiquiditeService } from "src/app/_services/risque-liquidite.service";

@Component({
  selector: "app-consultation-r6",
  templateUrl: "./consultation-r6.component.html",
  styleUrls: ["./consultation-r6.component.css"],
})
export class ConsultationR6Component implements OnInit {
  selectedDate;
  constructor() {}

  ngOnInit(): void {}
}
