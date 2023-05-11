import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

import { json } from "express";
import { Clause, keyValueOperationOperand } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";
import { ParametrageRapportComponent } from "../../parametrage-rapport/parametrage-rapport.component";
import { ClauseDialogComponent } from "../clause-dialog/clause-dialog.component";
import { EditClauseDialogComponent } from "../edit-clause-dialog/edit-clause-dialog.component";

@Component({
  selector: "app-edit-type-dialog",
  templateUrl: "./edit-type-dialog.component.html",
  styleUrls: ["./edit-type-dialog.component.css"],
})
export class EditTypeDialogComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private parametrageService: ParametrageService,
    public dialogRef: MatDialogRef<EditTypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  numberOfKVOO = 1;
  ngOnInit(): void {
    console.log("data : ", this.data);
    this.formGroup.setValue({
      code: this.data.type.code,
      description: this.data.type.description,
    });

    const kvoosClone =
      typeof this.data.type.kvoo_s == "string"
        ? JSON.parse(structuredClone(this.data.type.kvoo_s))
        : structuredClone(this.data.type.kvoo_s);
    this.kVooList = kvoosClone;

    this.choosedClauses =
      typeof this.data.type.clauses == "string"
        ? JSON.parse(this.data.type.clauses)
        : this.data.type.clauses;
  }

  kVooList: keyValueOperationOperand[] = [];
  submitIsDisabled: boolean;
  choosedClauses: Clause[];
  kvooToEdit: keyValueOperationOperand[] = [];

  okCallback(k: keyValueOperationOperand[]) {}

  addToKvooListCallback = (k: keyValueOperationOperand, m: number): void => {
    // const index = this.kVooList.findIndex((k) => k.id == k.id);
    // if (index) {
    //   this.kVooList[index] = k;
    // }
    // const kv: keyValueOperationOperand = {
    //   id: m + 1,
    //   key: "",
    //   operation: "",
    //   operand: "AND",
    //   value: "",
    // };
    // this.kVooList.push(kv);
    // this.kvooToEdit = this.parametrageService.kvooToEdit;
    this.kVooList = this.parametrageService.kvooToEdit;
    console.log("kvooList : ", this.kVooList);
  };

  deleteFromKvooListCallback = (id: number): void => {
    if (this.kVooList.length > 1) {
      this.kVooList = this.kVooList.filter((k) => k.id != id);
    } else {
      this.kVooList[0] = {
        id: id,
        key: "",
        value: "",
        operation: "",
        operand: "AND",
      };
    }
  };

  formGroup = new FormGroup({
    code: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
  });

  onSubmit() {
    this.kVooList[this.kVooList.length - 1].operand = "";
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
    const dialogRef = this.dialog.open(EditClauseDialogComponent, {
      data: {
        clauses: this.choosedClauses,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log("Result from edit clauses : ", result);
        this.choosedClauses = result.clauses;
      }
    });
  }
}
