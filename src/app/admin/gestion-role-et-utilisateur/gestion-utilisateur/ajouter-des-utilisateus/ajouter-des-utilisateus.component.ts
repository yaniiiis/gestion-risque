//import { Role } from "./../../../../Models/Role";
//import { AppDataState, DataStateEnum } from "../../../../_States/appState";
import { Observable, map, startWith, catchError, of } from "rxjs";
import { Router } from "@angular/router";

import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/_services/UserService/user.service";
import { Agence } from "src/app/Models/Agence";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Role } from "src/app/Models/Role";
import { DataStateEnum, AppDataState } from "src/app/_States/appState";

@Component({
  selector: "app-ajouter-des-utilisateus",
  templateUrl: "./ajouter-des-utilisateus.component.html",
  styleUrls: ["./ajouter-des-utilisateus.component.css"],
})
export class AjouterDesUtilisateusComponent implements OnInit {
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}
  public AddUserForm!: FormGroup;
  readonly DataStateEnum = DataStateEnum;
  public roles$?: Observable<AppDataState<Role[]>> | null = null;
  public agences$?: Observable<AppDataState<Agence[]>> | null = null;
  errorMessage: string | null = null;
  submitted: boolean = false;
  ngOnInit(): void {
    this.AddUserForm = this.formBuilder.group({
      nom: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      prenom: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      roles: new FormControl("", [Validators.required]),
      agence: new FormControl("", [Validators.required]),
    });

    this.getAllRole();
    this.getAllAgence();
  }

  getAllRole() {
    this.roles$ = this.userService.getAllRoles().pipe(
      map((data) => {
        return { dataState: DataStateEnum.LOADED, data: data };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((error) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: error.Message })
      )
    );
  }
  getAllAgence() {
    this.agences$ = this.userService.getAllAgence().pipe(
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
    if (this.AddUserForm.valid) {
      let roles = { id: this.AddUserForm.value.roles };
      let agence = { id: this.AddUserForm.value.agence };
      console.log(this.AddUserForm);

      let FormData = {
        nom: this.AddUserForm.value.nom,
        prenom: this.AddUserForm.value.prenom,
        username: this.AddUserForm.value.username,
        password: this.AddUserForm.value.password,
        email: this.AddUserForm.value.email,
        roles: roles,
        agence: agence,
      };

      console.log(FormData);
      console.log(FormData.agence);

      this.userService.AddUsers(FormData).subscribe({
        next: () => {
          alert("User Created ");
          this.route.navigateByUrl(
            "Admin/GestionUtilisateur/ListeUtilisateurs"
          );
        },
        error: (error) => {
          this.submitted = false;
          console.log(error);
          this.errorMessage = error.error.text;
        },
      });
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.AddUserForm.controls[controlName].hasError(errorName);
  };
}
