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
import { Type } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-add-to-type-dialog",
  templateUrl: "./add-to-type-dialog.component.html",
  styleUrls: ["./add-to-type-dialog.component.css"],
})
export class AddToTypeDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddToTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private parametrageService: ParametrageService
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
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
  });

  get code() {
    return this.formGroup.get("code");
  }

  get description() {
    return this.formGroup.get("description");
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

      const exist = this.data.existingTypes.find((d: Type) => d.code == value);
      return exist ? { exist: true } : null;
    };
  }
}
