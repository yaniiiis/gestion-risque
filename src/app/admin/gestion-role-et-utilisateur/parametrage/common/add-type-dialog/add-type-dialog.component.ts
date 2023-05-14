import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-add-type-dialog",
  templateUrl: "./add-type-dialog.component.html",
  styleUrls: ["../add.css", "./add-type-dialog.component.css"],
})
export class AddTypeDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private parametrageService: ParametrageService
  ) {}

  isListUnderTypesOpen: boolean = false;
  selectedUnderType: string;
  withRelations: boolean = false;
  underTypesList = ["Entreprise", "Particulier"];

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  okClick() {
    //   if (this.name) this.parametrageService.addDomaine(this.name);
    //   this.dialogRef.close();
  }

  formGroup = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    // underType: new FormControl("", [Validators.required]),
  });

  get title() {
    return this.formGroup.get("title");
  }

  get description() {
    return this.formGroup.get("description");
  }

  // get underType() {
  //   return this.formGroup.get("underType");
  // }

  checkBoxChange(event: any) {
    this.withRelations = event;
  }

  toggleListUnderTypes() {
    this.isListUnderTypesOpen = !this.isListUnderTypesOpen;
  }

  closeListUnderTypes() {
    this.isListUnderTypesOpen = false;
  }
}
