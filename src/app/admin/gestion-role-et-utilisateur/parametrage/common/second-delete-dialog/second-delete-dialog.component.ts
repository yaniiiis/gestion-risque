import { Component, Inject, Input, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-second-delete-dialog",
  templateUrl: "./second-delete-dialog.component.html",
  styleUrls: ["../delete.css"],
})
export class SecondDeleteDialogComponent implements OnInit {
  title: string;
  text: string;
  constructor(
    public dialogRef: MatDialogRef<SecondDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.title = this.data.title;
    this.text = this.data.text;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
