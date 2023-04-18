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
    this.formGroup2 = new FormGroup({
      code: new FormControl("", [Validators.required]),
      operation: new FormControl("", [Validators.required]),
      code2: new FormControl("", [Validators.required]),
    });
  }

  filledKVOONumber: any[];
  kVooList: keyValueOperationOperand[] = [];
  submitIsDisabled: boolean;
  choosedClauses: Clause[];
  isRequest: boolean = false;

  addToKeyValueOperationArray() {}

  // formGroup = this.parametrageService.formGroup;

  formGroup = new FormGroup({
    code: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
  });

  formGroup2: FormGroup;

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

  operationsToDisplay = ["+", "-", "*", "/"];
  codesToDisplay = ["aval", "caution"];
  isListCodes2Open: boolean = false;

  toggleCodesList2() {
    this.isListCodes2Open = !this.isListCodes2Open;
  }

  addArithmetic() {
    console.log(this.arithmeticCode.value);
    console.log(this.arithmeticOperation.value);
    console.log(this.arithmeticCode2.value);
  }

  get arithmeticCode() {
    return this.formGroup2.get("code");
  }

  get arithmeticOperation() {
    return this.formGroup2.get("operation");
  }

  get arithmeticCode2() {
    return this.formGroup2.get("code2");
  }
}
