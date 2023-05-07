import { Component, OnInit } from "@angular/core";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { IndicateurService } from "src/app/_services/indicateur.service";
import { RisqueLiquiditeService } from "src/app/_services/risque-liquidite.service";

@Component({
  selector: "app-consultation-r5",
  templateUrl: "./consultation-r5.component.html",
  styleUrls: ["./consultation-r5.component.css"],
})
export class ConsultationR5Component implements OnInit {
  selectedDate;
  constructor() {}

  ngOnInit(): void {}
}
