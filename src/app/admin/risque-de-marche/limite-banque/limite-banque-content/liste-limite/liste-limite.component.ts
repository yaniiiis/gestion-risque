import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { RisqueDeMarcheService } from "src/app/_services/risque-de-marche.service";
import { DialogueCreationLimiteComponent } from "./dialogue-creation-limite/dialogue-creation-limite.component";

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
    public dialog: MatDialog
  ) {}
  title: string = "Confirmation";
  beneficiaire: string = "";
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogueCreationLimiteComponent, {
      data: { title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.beneficiaire = result;
    });
  }

  ngOnInit(): void {
    this.Data = this.risqueDeMarcheService.findAllLimiteBanque();
  }
  modifier(item) {
    alert("Modifier " + item.id);
  }
  desactiver(item) {
    alert("Désactiver " + item.id);
  }

  creerLimite() {
    alert("Créer une limite ");
  }
}
