import { Component, Inject, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Domaine } from "src/app/Models/Domaine";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-add-to-dialog",
  templateUrl: "./add-to-dialog.component.html",
  styleUrls: ["./add-to-dialog.component.css"],
})
export class AddToDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddToDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private parametrageService: ParametrageService
  ) {}
  // code = "";
  // description = "";
  // date: any;
  // checked = false;
  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  okClick() {
    const domaine: Domaine = {
      id: 0,
      domainName: this.data.key,
      domainCode: this.code.value,
      description: this.description.value,
      dateFin: this.date.value,
    };
    this.parametrageService.addToDomaine(domaine);
    this.dialogRef.close();
  }

  formGroup = new FormGroup({
    code: new FormControl("", [
      Validators.required,
      Validators.pattern("[a-zA-Z0-9]+$"),
      this.createPasswordStrengthValidator(),
    ]),
    description: new FormControl("", [
      Validators.required,
      Validators.pattern("[a-zA-Z0-9]+$"),
    ]),
    date: new FormControl("", [Validators.required]),
    checked: new FormControl(""),
  });

  get code() {
    return this.formGroup.get("code");
  }

  get description() {
    return this.formGroup.get("description");
  }

  get date() {
    return this.formGroup.get("date");
  }

  get checked() {
    return this.formGroup.get("checked");
  }

  // checkboxChange(ob: MatCheckboxChange, item: string) {
  //   console.log(item + " checked : " + ob.checked);
  // }

  createPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const exist = this.data.existingDomains.find(
        (d: Domaine) => d.domainCode == value
      );

      // const hasUpperCase = /[A-Z]+/.test(value);

      // const hasLowerCase = /[a-z]+/.test(value);

      // const hasNumeric = /[0-9]+/.test(value);

      // const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      return exist ? { exist: true } : null;
    };
  }
}
