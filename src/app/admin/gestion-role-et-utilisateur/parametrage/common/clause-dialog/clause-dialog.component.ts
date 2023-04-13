import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subscription } from "rxjs";
import { Clause } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-clause-dialog",
  templateUrl: "./clause-dialog.component.html",
  styleUrls: ["../clauses.css"],
})
export class ClauseDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ClauseDialogComponent>,
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

  clausesToDisplay: Clause[] = [];

  ngOnInit(): void {
    // this.clausesSubscraption =
    this.parametrageService.clausesListSubject$.subscribe((c) => {
      this.choosedClauses = c;
    });
    this.choosedClauses.forEach((c) => {
      this.clausesToDisplay.push(c);
    });
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

  selectFiled(item: string) {
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
          !this.clausesToDisplay.find(
            (c) =>
              c.filed == this.choosedFeild &&
              c.selection == this.choosedSelection
          )
        ) {
          clause = {
            filed: this.choosedFeild,
            selection: this.choosedSelection,
          };
          this.clausesToDisplay.push(clause);
        } else {
          this.snackBar.open("Clause déja ajoutée", null, {
            duration: 3000,
            panelClass: ["error-snackbar"],
          });
        }
      } else if (
        !this.clausesToDisplay.find(
          (c) => c.filed == this.choosedFeild && c.selection == ""
        )
      ) {
        clause = { filed: this.choosedFeild, selection: "" };
        this.clausesToDisplay.push(clause);
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

      // this.choosedFeild = undefined;
      // this.choosedSelection = undefined;
      // this.formGroup.patchValue({
      //   field: "",
      //   selection: "",
      // });
      // this.addIsClicked = false;
    }
  }

  saveClick() {
    this.parametrageService.addToClauseListSubject(this.clausesToDisplay);
    // this.parametrageService.saveClauses();
    this.dialogRef.close();
  }

  deleteFromChoosedClauses(clause: Clause) {
    this.clausesToDisplay = this.clausesToDisplay.filter(
      (c) => c.filed != clause.filed || c.selection != clause.selection
    );
    // this.parametrageService.deleteFromClauseList(clause);
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
    this.clausesToDisplay = [];
    // this.parametrageService.resetClauseList();
  }

  clausesList = [
    "NOMINAL_EXPOSURE",
    "INT_RESERVES",
    "soldeBalance",
    "PROVISIONS",
    "VALEUR_CASH",
  ];
  operations = ["sum"];
}
