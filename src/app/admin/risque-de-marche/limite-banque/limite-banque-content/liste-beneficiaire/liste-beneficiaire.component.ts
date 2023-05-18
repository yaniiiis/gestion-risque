import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable, catchError, map, of, startWith } from "rxjs";
import { Banques } from "src/app/Models/Banques";
import { AppDataState, DataStateEnum } from "src/app/_States/appState";
import { RisqueDeMarcheService } from "src/app/_services/risque-de-marche.service";

@Component({
  selector: "app-liste-beneficiaire",
  templateUrl: "./liste-beneficiaire.component.html",
  styleUrls: ["./liste-beneficiaire.component.css"],
})
export class ListeBeneficiaireComponent implements OnInit {
  selectedBeneficiaire;
  Head = [
    "Type de placement",
    "Montant de la limite",
    "Durée maximale  de placement",
    "Date échéance",
    "Date de révision",
  ];
  Data: Observable<string[]>;
  constructor(
    private risqueDeMarcheService: RisqueDeMarcheService,
    private formBuilder: FormBuilder
  ) {}

  public BeneficiaireForm!: FormGroup;
  readonly DataStateEnum = DataStateEnum;
  public beneficiaire$?: Observable<AppDataState<Banques[]>> | null = null;

  ngOnInit(): void {
    this.BeneficiaireForm = this.formBuilder.group({
      beneficiaire: new FormControl("", [Validators.required]),
    });
    this.findAllBeneficiaires();
  }
  findAllBeneficiaires() {
    this.beneficiaire$ = this.risqueDeMarcheService.findAllBeneficiaires().pipe(
      map((data) => {
        return { dataState: DataStateEnum.LOADED, data: data };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((error) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: error.Message })
      )
    );
  }
  onChange(value) {
    console.log(value);

    this.Data =
      this.risqueDeMarcheService.findAllRisqMarcheLimiteByBeneficiaire(value);
  }
}
