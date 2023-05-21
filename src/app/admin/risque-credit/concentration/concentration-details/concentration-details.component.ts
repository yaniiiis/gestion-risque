import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { type } from "os";
import { ConcentrationService } from "src/app/_services/ConcentrationService/concentration-service.service";

@Component({
  selector: "app-concentration-details",
  templateUrl: "./concentration-details.component.html",
  styleUrls: ["./concentration-details.component.css"],
})
export class ConcentrationDetailsComponent implements OnInit {
  constructor(
    private location: Location,
    private concentrationService: ConcentrationService,
    private activatedRoute: ActivatedRoute
  ) {}

  data = [];
  id = this.activatedRoute.snapshot.paramMap.get("id");
  date = this.activatedRoute.snapshot.paramMap.get("date");
  type = this.activatedRoute.snapshot.paramMap.get("type");
  idTextForObj: string;
  ngOnInit(): void {
    console.log("selected type : ", this.type);
    if (this.type == "client") this.idTextForObj = "ID Client";
    else this.idTextForObj = "ID Groupe";
    this.concentrationService
      .getConcentrationClientDetails(this.id, this.date, this.type)
      .subscribe((response: any[]) => {
        response.forEach((element) => {
          const obj = {
            Date: this.date,
            [this.idTextForObj]: this.id,
            Agence: element["desc_AGENCE"],
            "Numero compte": element["numero_COMPTE"],
            "Type engagement": element["type_ENGAGEMENT"],
            Provision: element["provisions"],
            "Risque net": element["risque_NET"],
          };
          this.data.push(obj);
        });
      });
  }

  back() {
    this.location.back();
  }

  header = [
    "Date",
    this.type == "client" ? "ID Client" : "ID Groupe",
    "Agence",
    "Numero compte",
    "Type engagement",
    "Provision",
    "Risque net",
  ];
  // data: any[] = [
  //   {
  //     Date: "30/09/2022",
  //     "ID Client": 1,
  //     "Nom Client": "Client 1",
  //     Agence: "Hydra",
  //     "Numéro de compte": "XXX XXXX XX",
  //     "Type d'engagement": "Bilan",
  //     "Type de crédit": "CMT",
  //     Montant: 200000,
  //     "Type garantie": "PHB",
  //     "Montant Garantie": 700000,
  //     Provision: 0,
  //     "Risque net": 1000000,
  //   },
  //   {
  //     Date: "30/09/2022",
  //     "ID Client": 2,
  //     "Nom Client": "Client 2",
  //     Agence: "Hydra",
  //     "Numéro de compte": "YYYY YYYYYYY YY",
  //     "Type d'engagement": "Bilan",
  //     "Type de crédit": "CMT",
  //     Montant: 200000,
  //     "Type garantie": "PHB",
  //     "Montant Garantie": 700000,
  //     Provision: 0,
  //     "Risque net": 1000000,
  //   },
  // ];
}
