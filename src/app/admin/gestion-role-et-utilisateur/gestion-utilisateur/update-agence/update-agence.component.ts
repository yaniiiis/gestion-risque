import { Agence } from "src/app/Models/Agence";
import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "src/app/_services/UserService/user.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-update-agence",
  templateUrl: "./update-agence.component.html",
  styleUrls: ["./update-agence.component.css"],
})
export class UpdateAgenceComponent implements OnInit {
  @Input() agence: Agence;

  submitted: boolean = false;
  errorMessage :string|null = null;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route:Router
  ) {}
  public updateAgenceForm!: FormGroup;
  ngOnInit(): void {
    this.updateAgenceForm = this.formBuilder.group({
      id: new FormControl("", [Validators.required]),

      agenceName: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
      ]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
    });
  }

  onCloseModal() {
    document.querySelector(".update-agence-modal").classList.remove("d-block");
  }

  save() {

    let v = confirm("vous voulez modifier l'agence ?");
if(v== true)
    this.userService.UpdateAgence(this.agence.id,this.updateAgenceForm.value).subscribe({
      next:()=>{
    this.route.navigateByUrl("Admin/GestionUtilisateur/ListAgences");
     window.location.reload();
      },
      error:(err)=>{
        this.errorMessage=err.error;
      }
    })


  }
}
