import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-delete-type",
  templateUrl: "./delete-type.component.html",
  styleUrls: ["../delete.css"],
})
export class DeleteTypeComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private parametrageService: ParametrageService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
