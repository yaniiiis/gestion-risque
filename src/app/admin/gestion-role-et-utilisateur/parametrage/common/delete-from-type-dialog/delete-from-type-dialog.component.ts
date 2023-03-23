import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-delete-from-type-dialog",
  templateUrl: "./delete-from-type-dialog.component.html",
  styleUrls: ["./delete-from-type-dialog.component.css"],
})
export class DeleteFromTypeDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteFromTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private parametrageService: ParametrageService
  ) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
