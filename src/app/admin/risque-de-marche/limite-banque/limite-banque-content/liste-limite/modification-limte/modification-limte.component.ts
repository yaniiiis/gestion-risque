import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import moment from "moment";
import { Observable, catchError, map, of, startWith } from "rxjs";
import { AppDataState, DataStateEnum } from "src/app/_States/appState";
import { RisqueDeMarcheService } from "src/app/_services/risque-de-marche.service";

@Component({
  selector: "app-modification-limte",
  templateUrl: "./modification-limte.component.html",
  styleUrls: ["./modification-limte.component.css"],
})
export class ModificationLimteComponent implements OnInit {
  public AddLimitForm?: FormGroup;
  readonly DataStateEnum = DataStateEnum;
  public beneficiaires$?: Observable<AppDataState<any>> | null = null;
  public typePlacement$?: Observable<AppDataState<any>> | null = null;
  submitted: boolean = false;
  errorMessage: string | null = null;
  beneficiaire: string;
  dateTransforme: string;
  typePlacement: string;
  id;
  limit: any;
  constructor(
    private formBuilder: FormBuilder,
    private risqueDeMarcheService: RisqueDeMarcheService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllBeneficiaires();
    this.getAllTypePlacement();
    this.limit = {};
    // this.AddLimitForm = this.formBuilder.group({
    //   beneficiaire: new FormControl("", Validators.required),
    //   type: new FormControl("", Validators.required),
    //   dateEcheance: new FormControl("", Validators.required),
    //   dateDecision: new FormControl("", Validators.required),
    //   montantLimite: new FormControl("", Validators.required),
    //   durreMaximalePlacement: new FormControl("", Validators.required),
    // });
    this.AddLimitForm = this.formBuilder.group({
      beneficiaire: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
      dateEcheance: new FormControl("", Validators.required),
      dateDecision: new FormControl("", Validators.required),
      montantLimite: new FormControl("", Validators.required),
      durreMaximalePlacement: new FormControl("", Validators.required),
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params.id;
      console.log("id : " + this.id);
      this.risqueDeMarcheService.findLimitById(this.id).subscribe({
        next: (data) => {
          this.limit = data;
          const a = {
            beneficiaire: this.limit.beneficiaire,
            type: this.limit.type,
            dateEcheance: this.limit.dateEcheance,
            dateDecision: this.limit.dateDecision,
            montantLimite: this.limit.montantLimite,
            durreMaximalePlacement: this.limit.durreMaximalePlacement,
          };
          console.log("limit " + a.beneficiaire);

          setTimeout(() => {
            this.AddLimitForm.setValue(a);
          }, 1);
        },
      });
    });
  }
  getAllBeneficiaires() {
    this.beneficiaires$ = this.risqueDeMarcheService
      .findAllBeneficiaires()
      .pipe(
        map((data) => {
          return { dataState: DataStateEnum.LOADED, data: data };
        }),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError((error) =>
          of({ dataState: DataStateEnum.ERROR, errorMessage: error.Message })
        )
      );
  }
  getAllTypePlacement() {
    this.typePlacement$ = this.risqueDeMarcheService
      .findAllTypePlacement()
      .pipe(
        map((data) => {
          return { dataState: DataStateEnum.LOADED, data: data };
        }),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError((error) =>
          of({ dataState: DataStateEnum.ERROR, errorMessage: error.Message })
        )
      );
  }

  onSubmit() {
    var datePipe = new DatePipe("en-US");
    this.dateTransforme = datePipe.transform(
      this.AddLimitForm.value.dateDecision,
      "yyyy-MM-dd"
    );

    if (this.AddLimitForm.valid) {
      console.log(this.AddLimitForm);
      let FormData = {
        id: this.id,
        beneficiaire: this.AddLimitForm.value.beneficiaire,
        type: this.AddLimitForm.value.type,
        dateDecision: this.AddLimitForm.value.dateDecision,
        dateEcheance: this.AddLimitForm.value.dateEcheance,
        montantLimite: this.AddLimitForm.value.montantLimite,
        durreMaximalePlacement: this.AddLimitForm.value.durreMaximalePlacement,
      };
      console.log(FormData);
      this.risqueDeMarcheService.UpdateLimit(this.id, FormData).subscribe({
        next: () => {
          alert("Limite Modifiée");
          this.route.navigateByUrl("Admin/LimiteBanque/ListeLimites");
        },
        error: (error) => {
          this.submitted = false;
          console.log(error);
          this.errorMessage = error.error.text;
        },
      });
    }
  }

  selectBeneficiaire(event: Event) {
    this.beneficiaire = (event.target as HTMLSelectElement).value;
  }
  selectTypePlacement(event: Event) {
    this.typePlacement = (event.target as HTMLSelectElement).value;
  }
}
