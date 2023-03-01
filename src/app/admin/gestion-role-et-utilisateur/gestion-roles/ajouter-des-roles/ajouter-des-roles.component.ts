import { Permission } from "src/app/Models/Permission";

import { Observable, map, startWith, catchError, of, toArray } from "rxjs";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray,
} from "@angular/forms";
import { Router } from "@angular/router";
//import { UserService } from "src/app/_services/UserService/user.service";
import { AppDataState, DataStateEnum } from "src/app/_States/appState";

import { Niveau } from "src/app/Models/Niveau";
import { UserService } from "src/app/_services/UserService/user.service";

@Component({
  selector: "app-ajouter-des-roles",
  templateUrl: "./ajouter-des-roles.component.html",
  styleUrls: ["./ajouter-des-roles.component.css"],
})
export class AjouterDesRolesComponent implements OnInit {
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}
  public AddRoleForm!: FormGroup;
  readonly DataStateEnum = DataStateEnum;
  public permissions$?: Observable<AppDataState<Permission[]>> | null = null;
  public Niveaux$?: Observable<AppDataState<Niveau[]>> | null = null;
  submitted: boolean = false;
  errorMessage: string | null = null;

  // slectedPermission: AllSelectedPermission[] = [];
  ngOnInit(): void {
    this.AddRoleForm = this.formBuilder.group({
      roleName: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ]),
      niveau: new FormControl("", [Validators.required]),
      permission: this.formBuilder.array([], [Validators.required]),
    });

    this.getAllPermissions();
    this.getAllNiveaux();
  }
  getAllPermissions() {
    this.permissions$ = this.userService.getAllPermissions().pipe(
      map((data) => {
        return { dataState: DataStateEnum.LOADED, data: data };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((error) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: error.Message })
      )
    );
  }

  getAllNiveaux() {
    this.Niveaux$ = this.userService.getAllNiveauxRole().pipe(
      map((data) => {
        return { dataState: DataStateEnum.LOADED, data: data };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((error) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: error.Message })
      )
    );
  }

  changeenvent(event) {
    const permission: FormArray = this.AddRoleForm.get(
      "permission"
    ) as FormArray;

    if (event.target.checked) {
      permission.push(new FormControl({ id: event.target.value }));
    } else {
      let i: number = 0;
      permission.controls.forEach((item: any) => {
        if (item.value.id === event.target.value) {
          permission.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit() {
    if (this.AddRoleForm.valid) {
      let FormData = {
        name: this.AddRoleForm.value.roleName,
        permissions: this.AddRoleForm.value.permission,
        niveaux: { idNiv: this.AddRoleForm.value.niveau },
      };

      this.submitted = true;
      this.userService.newRole(FormData).subscribe({
        next: () => {
          this.route.navigateByUrl("Admin/GestionDesRoles/ListesRoles");
          alert("Role Created ");
        },
        error: (err) => {
          this.submitted = false;

          this.errorMessage = err.message;
        },
      });
    }
  }
}
