import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/_services/Client/client.service";
import { RepartitionParSecteurComponent } from "../repartition-par-secteur/repartition-par-secteur.component";
import { RepartitionParZoneComponent } from "../repartition-par-zone/repartition-par-zone.component";

@Component({
  selector: "app-gestion-risque-client-content",
  templateUrl: "./gestion-risque-client-content.component.html",
  styleUrls: ["./gestion-risque-client-content.component.css"],
})
export class GestionRisqueClientContentComponent implements OnInit {
  protected menuItems = [
    {
      menuItem: "Répartition Par zone",
      path: "ClientParZone",
      Component: RepartitionParZoneComponent,
    },
    {
      menuItem: "Répartition Par secteur ",
      path: "ClientParSecteur",
      component: RepartitionParSecteurComponent,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
