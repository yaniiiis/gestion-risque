import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-add-under-type",
  templateUrl: "./add-under-type.component.html",
  styleUrls: ["../add.css"],
})
export class AddUnderTypeComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddUnderTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private parametrageService: ParametrageService
  ) {}

  ngOnInit(): void {}

  formGroup = new FormGroup({
    underType: new FormControl("", [Validators.required]),
  });

  get underType() {
    return this.formGroup.get("underType");
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
