//import { rolePermissionsUpdated } from "./../../../../Models/rolePermissionsUpdated";

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from "@angular/forms";
import { UserService } from "src/app/_services/UserService/user.service";
import { Niveau } from "src/app/Models/Niveau";
import { Permission } from "src/app/Models/Permission";
//import { Role } from "./../../../../Models/Role";
import { Component, Input, OnInit, Output, SimpleChanges } from "@angular/core";
import { DataStateEnum } from "src/app/_States/appState";
import { Role } from "src/app/Models/Role";
import { rolePermissionsUpdated } from "src/app/Models/rolePermissionsUpdated";

@Component({
  selector: "app-modal-update-role",
  templateUrl: "./modal-update-role.component.html",
  styleUrls: ["./modal-update-role.component.css"],
})
export class ModalUpdateRoleComponent implements OnInit {
  @Input() role: Role | null = null;
  @Input() perms = [];
  @Input() niv: [Niveau] | null = null;
  @Input() currentPermissions =[]
  // @Input() isModalOpened:EventEmitter<Boolean>
  public permissIDs = [];

  public rolle: Role | null = null;
  public rolePermissionsSelected: rolePermissionsUpdated[] = [];
  public UpdateRoleForm!: FormGroup;
  readonly DataStateEnum = DataStateEnum;
  public permissions?: Permission[] | null = null;
  public Niveaux?: Niveau[] | null = null;
  public submitted: boolean = false;
  public isChecked: boolean = false;
  public errorMessage: string | null = null;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // console.log( "perm",this.perms);

    this.UpdateRoleForm = this.formBuilder.group({
      id: new FormControl(this.role?.id, [Validators.required]),

      name: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),

      permission: this.formBuilder.array([], [Validators.required]),
      niveaux: new FormControl(this.role?.niveaux, [Validators.required]),
    });

    this.getAllPermissions();
    this.getAllNiveaux();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentPermissions=[];
    if (changes["perms"]) {
     

      this.currentPermissions=[];
      document.querySelectorAll("input.permissionCheckbox").forEach((checkbox) => {
        checkbox.removeAttribute("checked");
        if ( changes["perms"]["currentValue"].includes( parseInt(checkbox.getAttribute("value")) ) ) {
          checkbox.setAttribute("checked", "true"); 
          
          this.currentPermissions.push(parseInt(checkbox.getAttribute('value'))) 
          
        }
      });

       
   
    }
  }

  getAllPermissions() {
    this.userService.getAllPermissions().subscribe({
      next: (data) => {
        this.permissions = data;
        this.permissIDs = this.permissions.map((perm) => perm.id);
      },
      error: (err) => {
        this.submitted = false;
        this.errorMessage = err.error;
      },
    });
  }

  getAllNiveaux() {
    this.userService.getAllNiveauxRole().subscribe({
      next: (data) => {
        this.Niveaux = data;
      },
      error: (err) => {
        this.submitted = false;
        this.errorMessage = err.error;
      },
    });
  }

  onCloseModal() {
    
    
    document.querySelector(".update-role-modal").classList.remove("d-block");

    
    this.currentPermissions=[];
  }

  changeenvent(event) {
    if (event.target.checked && ! this.currentPermissions.includes(event.target.value)) {
      this.currentPermissions.push(parseInt(event.target.value))
    } else {
      this.currentPermissions.splice(this.currentPermissions.indexOf(parseInt(event.target.value)) , 1)
    }
   
  }

  save() {
    let nom = document.forms["update-role-data"].querySelector(
      "[formControlName=name]"
    ).value;
    let niveaux = document.forms["update-role-data"].querySelector(
      "[formControlName=niveaux]"
    ).value;
let perm = this.currentPermissions.map(i =>{
  return {id: i}
})
    let formData = {
      name: nom,
      niveaux: { idNiv: niveaux },
      permissions: perm,
    };


    this.userService.UpdateRole(this.role?.id, formData).subscribe({
      next: () => {
        alert("Role a été bien modifier");
        window.location.reload();
      },
      error: (err) => {
        this.submitted = false;
        this.errorMessage = err.error;
      },
    });
  }
}
