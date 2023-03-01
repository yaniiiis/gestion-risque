import { Ressources } from "src/app/Models/Ressources";
import { Privileges } from "src/app/Models/Privileges";
//import { AppDataState } from "./../../../../_States/appState";
import { Observable, map, startWith, catchError, of } from "rxjs";
import { Router } from "@angular/router";
//import { UserService } from "app/_services/UserService/user.service";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup, 
  FormControl,
  Validators
} from "@angular/forms";

import { DataStateEnum } from "src/app/_States/appState";
import { AppDataState } from "src/app/_States/appState";
import { UserService } from "src/app/_services/UserService/user.service";

@Component({
  selector: "app-add-permission",
  templateUrl: "./add-permission.component.html",
  styleUrls: ["./add-permission.component.css"],
})
export class AddPermissionComponent implements OnInit {
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}
  public AddPermissionsForm!: FormGroup;
  readonly DataStateEnum = DataStateEnum;
  public privileges$?: Observable<AppDataState<Privileges[]>> | null = null;
  public ressources$?: Observable<AppDataState<Ressources[]>> | null = null;

  errorMessage: string | null = null;
  submitted: boolean = false;
  ngOnInit(): void {
    this.AddPermissionsForm = this.formBuilder.group({
      privileges: new FormControl("", [Validators.required]),
      ressources: new FormControl("", [Validators.required]),
    });

    this.getAllPrivileges();
    this.getAllRessources();
  }

  getAllPrivileges() {
    this.privileges$ = this.userService.getAllPrivileges().pipe(
      map((data) => {
        return { dataState: DataStateEnum.LOADED, data: data };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((error) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: error.Message })
      )
    );
  }

  getAllRessources() {
    this.ressources$ = this.userService.getAllRessources().pipe(
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
    this.submitted = true;
    let privileges = { id: this.AddPermissionsForm.value.privileges };
    let ressources = { id: this.AddPermissionsForm.value.ressources };
    console.log(this.AddPermissionsForm);

    let formdata = {
      privileges: privileges,
      ressources: ressources,
    };

    console.log(FormData);

    this.userService.newPermission(formdata).subscribe({
      next: () => {
        alert("Permission Created ");
        this.route.navigateByUrl("Admin/GestionDesRoles/ListPermissions");
      },
      error: (error) => {
        this.submitted = false;
        this.errorMessage = error.error;
      },
    });
  }
}
