import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Clause, keyValueOperationOperand } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";
import { ClauseDialogComponent } from "../common/clause-dialog/clause-dialog.component";

@Component({
  selector: "app-parametrage-rapport",
  templateUrl: "./parametrage-rapport.component.html",
  styleUrls: ["./parametrage-rapport.component.css"],
})
export class ParametrageRapportComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private parametrageService: ParametrageService,
    public dialogRef: MatDialogRef<ParametrageRapportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  numberOfKVOO = 1;
  ngOnInit(): void {
    this.parametrageService.KVOOListSubject$.subscribe((l) => {
      this.kVooList = l;
    });

    this.parametrageService.submitIsDisabledSubject$.subscribe((b) => {
      this.submitIsDisabled = b;
    });

    this.parametrageService.clausesListSubject$.subscribe((c) => {
      this.choosedClauses = c;
    });
  }

  filledKVOONumber: any[];
  kVooList: keyValueOperationOperand[] = [];
  submitIsDisabled: boolean;
  choosedClauses: Clause[];

  addToKeyValueOperationArray() {}

  // formGroup = this.parametrageService.formGroup;

  formGroup = new FormGroup({
    code: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
  });

  onSubmit() {
    this.kVooList[this.kVooList.length - 1].operand = "";
    this.parametrageService.resetClauseList();
    this.parametrageService.resetKvooList();
  }

  isButtonDisabled() {
    return (
      this.formGroup.invalid ||
      this.submitIsDisabled ||
      this.choosedClauses.length < 1
    );
  }

  get code() {
    return this.formGroup.get("code");
  }

  get description() {
    return this.formGroup.get("description");
  }

  get key() {
    return this.formGroup.get("keyValueOperationOperand.key");
  }

  get operand() {
    return this.formGroup.get("keyValueOperationOperand.operand");
  }

  openClauseDialog() {
    const dialogRef = this.dialog.open(ClauseDialogComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
