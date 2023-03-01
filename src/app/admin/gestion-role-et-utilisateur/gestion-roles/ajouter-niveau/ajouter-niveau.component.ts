import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
//import { UserService } from "src/app/_services/UserService/user.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/_services/UserService/user.service";

@Component({
  selector: "app-ajouter-niveau",
  templateUrl: "./ajouter-niveau.component.html",
  styleUrls: ["./ajouter-niveau.component.css"],
})
export class AjouterNiveauComponent implements OnInit {
  submitted: boolean = false;
  errorMessage: string | null = null;
  public AddNivForm: FormGroup;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.AddNivForm = this.formBuilder.group({
      nameNiveau: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ]),
      niveauNumber: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15),
      ]),
    });
  }
  onSubmit() {
    if (this.AddNivForm.valid) {
      this.submitted = true;
      this.userService.addNiveau(this.AddNivForm.value).subscribe({
        next: () => {
          alert("niveau est créer ");
          this.route.navigateByUrl("Admin/GestionDesRoles/ListNiveaux");
        },

        error: (err) => {
          this.submitted = false;
          this.errorMessage = err.error;
        },
      });
    }
  }
}
