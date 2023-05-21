import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { RisqueDeMarcheService } from "src/app/_services/risque-de-marche.service";

@Component({
  selector: "app-liste-limite",
  templateUrl: "./liste-limite.component.html",
  styleUrls: ["./liste-limite.component.css"],
})
export class ListeLimiteComponent implements OnInit {
  Head = [
    "Bénéficiaires",
    "Type",
    "Montant limite",
    "Date de décision",
    "Date échéance",
    "Durée maximale de placement",
    "Dernière date de révision",
    "",
    "",
  ];
  Data: Observable<string[]>;
  constructor(
    private risqueDeMarcheService: RisqueDeMarcheService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}
  title: string = "Confirmation";
  beneficiaire: string = "";

  ngOnInit(): void {
    this.Data = this.risqueDeMarcheService.findAllLimiteBanque();
  }
  modifier(item) {
    alert("Modifier " + item.id);
  }
  desactiver(item) {
    this.route.navigateByUrl(
      "Admin/LimiteBanque/DesactivationLimite?id=" + item.id
    );
  }

  creerLimite() {
    this.route.navigateByUrl("Admin/LimiteBanque/CreationLimite");
  }
  modifierLimite(id) {
    this.route.navigateByUrl("Admin/LimiteBanque/ModificationLimite?id=" + id);
    // this.route.navigate(["/Admin/LimiteBanque/ModificationLimite"], {
    //   queryParams: { id: 1 },
    // });
  }
}
