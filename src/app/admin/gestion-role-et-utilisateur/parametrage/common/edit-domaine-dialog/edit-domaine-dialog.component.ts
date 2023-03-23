import { Component, Inject, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import * as moment from "moment";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-edit-domaine-dialog",
  templateUrl: "./edit-domaine-dialog.component.html",
  styleUrls: ["../add-edit-domaine.css"],
})
export class EditDomaineDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditDomaineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private parametrageService: ParametrageService
  ) {}

  ngOnInit(): void {
    console.log("data : ", this.data);
    this.formGroup.setValue({
      code: this.data.domaine.domainCode,
      description: this.data.domaine.description,
      date: moment(this.data.domaine.dateFin).format("yyyy-MM-DD"),
    });
    console.log("form group : ", this.formGroup);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // okClick(item: Domaine) {
  //   const domaine: Domaine = {
  //     id: item.id,
  //     domainName: item.domainName,
  //     domainCode: this.code.value,
  //     description: this.description.value,
  //     dateFin: this.date.toString().substring(0, 10),
  //   };
  //   this.parametrageService.editDomaineFromMapOfdomaines(domaine).subscribe({
  //     next: (response) => {},
  //   });
  //   this.dialogRef.close();
  // }

  formGroup = new FormGroup({
    code: new FormControl("", [
      Validators.required,
      //Validators.pattern("[a-zA-Z0-9]+$"),
    ]),
    description: new FormControl("", [
      Validators.required,
      // Validators.pattern("[a-zA-Z0-9]+$"),
    ]),
    date: new FormControl("", [Validators.required]),
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
}
