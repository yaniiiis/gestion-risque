import { Component, Inject, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Observable } from "rxjs";

export interface DialogData {
  title: string;
  beneficiaire: string;
}
@Component({
  selector: "app-dialogue-creation-limite",
  templateUrl: "./dialogue-creation-limite.component.html",
  styleUrls: ["./dialogue-creation-limite.component.css"],
})
export class DialogueCreationLimiteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogueCreationLimiteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  control = new FormControl("");
  streets: string[] = [
    "Champs-Élysées",
    "Lombard Street",
    "Abbey Road",
    "Fifth Avenue",
  ];
  filteredStreets: Observable<string[]>;

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    alert("Enregistrement");
  }
}
