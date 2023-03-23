import { Component, Inject, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { Subscription } from "rxjs";
import { Clause } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-edit-clause-dialog",
  templateUrl: "./edit-clause-dialog.component.html",
  styleUrls: ["../clauses.css"],
})
export class EditClauseDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditClauseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private parametrageService: ParametrageService,
    private snackBar: MatSnackBar
  ) {}

  isListClauseOperationOpen: boolean = false;
  isListClauseOpen: boolean = false;
  choosedFeild: string;
  choosedSelection: string;
  choosedClauses: Clause[] = [];
  clausesSubscraption: Subscription;
  addIsClicked: boolean = false;
  // @Input() editCallback: (clauses: Clause[]) => void;

  ngOnInit(): void {
    this.choosedClauses = structuredClone(this.data.clauses);
  }

  formGroup = new FormGroup({
    field: new FormControl("", [Validators.required]),
    selection: new FormControl("", [Validators.required]),
  });

  get field() {
    return this.formGroup.get("field");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectField(item: string) {
    this.choosedFeild = item;
    this.formGroup.patchValue({
      field: item,
    });
  }

  selectSelection(item: string) {
    this.choosedSelection = item;
    this.formGroup.patchValue({
      selection: item,
    });
  }

  addToChoosedClauses() {
    this.addIsClicked = true;
    let clause: Clause;
    if (this.choosedFeild) {
      if (this.choosedSelection) {
        if (
          !this.choosedClauses.find(
            (c) =>
              c.field == this.choosedFeild &&
              c.selection == this.choosedSelection
          )
        ) {
          clause = {
            field: this.choosedFeild,
            selection: this.choosedSelection,
          };
          this.choosedClauses.push(clause);
        } else {
          this.snackBar.open("Clause déja ajoutée", null, {
            duration: 3000,
            panelClass: ["error-snackbar"],
          });
        }
      } else if (
        !this.choosedClauses.find(
          (c) => c.field == this.choosedFeild && c.selection == ""
        )
      ) {
        clause = { field: this.choosedFeild, selection: "" };
        this.choosedClauses.push(clause);
      } else {
        this.snackBar.open("Clause déja ajoutée", null, {
          duration: 3000,
          panelClass: ["error-snackbar"],
        });
      }
      this.choosedFeild = "";
      this.choosedSelection = "";
      this.formGroup.patchValue({
        selection: "",
        field: "",
      });
      this.formGroup.controls.field.markAsPristine();
    }
  }

  saveClick() {
    // this.parametrageService.addToClauseListSubject(this.choosedClauses);
    // this.parametrageService.saveClauses();
    this.dialogRef.close();
  }

  deleteFromChoosedClauses(clause: Clause) {
    this.choosedClauses = this.choosedClauses.filter(
      (c) => c.field != clause.field || c.selection != clause.selection
    );
  }

  toggleListClause() {
    this.isListClauseOpen = !this.isListClauseOpen;
  }

  closeListClause() {
    this.isListClauseOpen = false;
  }

  toggleListClauseOperation() {
    this.isListClauseOperationOpen = !this.isListClauseOperationOpen;
  }

  closeListOperation() {
    this.isListClauseOperationOpen = false;
  }

  closeDialog() {
    this.dialogRef.close();
    this.choosedClauses = [];
    // this.parametrageService.resetClauseList();
  }

  clausesList = ["NominalExposure", "SoldBalance", "Islamic"];
  operations = ["*", "count", "avg"];
}
