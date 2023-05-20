import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, catchError, map, of, startWith } from "rxjs";
import { AppDataState, DataStateEnum } from "src/app/_States/appState";
import { RisqueDeMarcheService } from "src/app/_services/risque-de-marche.service";

@Component({
  selector: "app-creation-limite",
  templateUrl: "./creation-limite.component.html",
  styleUrls: ["./creation-limite.component.css"],
})
export class CreationLimiteComponent implements OnInit {
  public AddLimitForm!: FormGroup;
  readonly DataStateEnum = DataStateEnum;
  public beneficiaires$?: Observable<AppDataState<String>> | null = null;
  submitted: boolean = false;
  errorMessage: string | null = null;
  beneficiaire: string;
  dateTransforme: string;
  constructor(
    private formBuilder: FormBuilder,
    private risqueDeMarcheService: RisqueDeMarcheService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.AddLimitForm = this.formBuilder.group({
      beneficiaire: new FormControl(""),
      typeLimite: new FormControl(""),
      dateEcheance: new FormControl(""),
      montant: new FormControl(""),
      dateDecision: new FormControl(""),
    });

    this.getAllBeneficiaires();
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
  onSubmit() {
    var datePipe = new DatePipe("en-US");
    this.dateTransforme = datePipe.transform(
      this.AddLimitForm.value.dateDecision,
      "yyyy-MM-dd"
    );

    alert("dateDecision" + this.dateTransforme);

    // if (this.AddUserForm.valid) {
    //   let roles = this.roles;
    //   let agence = this.agence;
    //   console.log(this.AddUserForm);
    //   let FormData = {
    //     nom: this.AddUserForm.value.nom,
    //     prenom: this.AddUserForm.value.prenom,
    //     username: this.AddUserForm.value.username,
    //     password: this.AddUserForm.value.password,
    //     email: this.AddUserForm.value.email,
    //     roles: roles,
    //     agence: agence,
    //   };
    //   console.log(FormData);
    //   console.log(FormData.agence);
    //   this.userService.AddUsers(FormData).subscribe({
    //     next: () => {
    //       alert("User Created ");
    //       this.route.navigateByUrl(
    //         "Admin/GestionUtilisateur/ListeUtilisateurs"
    //       );
    //     },
    //     error: (error) => {
    //       this.submitted = false;
    //       console.log(error);
    //       this.errorMessage = error.error.text;
    //     },
    //   });
    // }
    this.risqueDeMarcheService.AddLimit(FormData).subscribe({
      next: () => {
        alert("Limit Created ");
        this.route.navigateByUrl("Admin/LimiteBanque/ListeLimites");
      },
      error: (error) => {
        this.submitted = false;
        console.log(error);
        this.errorMessage = error.error.text;
      },
    });
  }

  selectBeneficiaire(event: Event) {
    this.beneficiaire = (event.target as HTMLSelectElement).value;
  }
}
