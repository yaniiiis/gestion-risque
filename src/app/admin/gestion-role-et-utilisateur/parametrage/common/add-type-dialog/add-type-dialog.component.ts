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

  isListRelationsOpen: boolean = false;
  selectedRelations: string[] = [];
  withRelations: boolean = false;
  relationsList = ["One", "Two", "Three"];

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

  checkBoxChange(event: any) {
    this.withRelations = event;
  }

  toggleListRelations() {
    this.isListRelationsOpen = !this.isListRelationsOpen;
  }

  closeListRelations() {
    this.isListRelationsOpen = false;
  }

  selectRelation(item: string) {
    this.selectedRelations.push(item);
  }

  deleteFromSelectedRelations(item: string) {
    this.selectedRelations = this.selectedRelations.filter((r) => r != item);
  }
}
