import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";
//import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-add-domaine-dialog",
  templateUrl: "./add-domaine-dialog.component.html",
  styleUrls: ["./add-domaine-dialog.component.css"],
})
export class AddDomaineDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddDomaineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private parametrageService: ParametrageService
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  okClick() {
    //   if (this.name) this.parametrageService.addDomaine(this.name);
    //   this.dialogRef.close();
  }

  formGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
  });

  get name() {
    return this.formGroup.get("name");
  }
}
