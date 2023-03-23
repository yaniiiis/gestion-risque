import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Type } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";
import { AddToTypeDialogComponent } from "../../common/add-to-type-dialog/add-to-type-dialog.component";
import { DeleteFromTypeDialogComponent } from "../../common/delete-from-type-dialog/delete-from-type-dialog.component";
import { EditTypeDialogComponent } from "../../common/edit-type-dialog/edit-type-dialog.component";
import { ParametrageRapportComponent } from "../parametrage-rapport.component";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["../../table-css.css"],
})
export class TableComponent implements OnInit {
  constructor(
    private parametrageService: ParametrageService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  @Input() type: string;
  @Input() passedTypes: Type[];

  typesToAdd: any[] = [];
  typesToUpdate: Type[] = [];
  typesToDelete: any[] = [];
  typesTofilter: Type[];
  isOpen: boolean = false;

  // operations booleans
  isDeleteLoading: boolean = false;
  isDeleteSuccess: boolean = false;
  isDeleteError: boolean = false;
  isAddLoading: boolean = false;
  isAddSuccess: boolean = false;
  isAddError: boolean = false;
  isEditLoading: boolean = false;
  isEditSuccess: boolean = false;
  isEditError: boolean = false;

  //save and update bool
  saveIsLoading = false;
  saveIsSuccess = false;
  saveHasError = false;

  ngOnInit(): void {
    this.typesTofilter = this.passedTypes;
  }

  setIsOpen() {
    this.isOpen = !this.isOpen;
  }

  searching(input: string) {
    const filtredDomains = this.typesTofilter.filter(
      (d) => d.code.includes(input) || d.description.includes(input)
    );
    this.passedTypes = filtredDomains;
  }

  sauvgarderClick() {
    this.saveIsLoading = true;

    // for (let index = 0; index < this.typesToAdd.length; index++) {
    //   const l = this.typesToAdd[index]["kvooList"].length;
    //   this.typesToAdd[index]["kvooList"][l - 1].operand = "";
    // }

    const data = {
      typesToSave: this.typesToAdd,
      typesToUpdate: this.typesToUpdate,
      typesToDelete: this.typesToDelete,
    };

    console.log("Data : ", data);

    this.parametrageService.sauvgarderTypes(data).subscribe({
      next: (response) => {
        console.log("Response : ", response);
        this.saveIsLoading = false;
        this.saveIsSuccess = true;
        this.typesToAdd = [];
        this.typesToUpdate = [];
        this.typesToDelete = [];
        this.snackBar.open("Sauvgardé(s) avec succée", null, {
          duration: 3000,
          panelClass: ["success-snackbar"],
        });
      },
      error: (error: any) => {
        console.log("error : ", error);
        this.saveIsLoading = false;
        this.saveHasError = true;
        this.snackBar.open("Erreur de connexion", null, {
          duration: 3000,
          panelClass: ["error-snackbar"],
        });
      },
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ParametrageRapportComponent, {
      data: {
        key: this.type,
        existingTypes: this.passedTypes,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result.kvoo_s[result.kvoo_s.length - 1].operand = "";

        if (this.passedTypes.find((d) => d.code == result.code)) {
          this.snackBar.open("Ce code existe déja dans ce type", null, {
            duration: 6000,
            panelClass: ["error-snackbar"],
          });
        } else {
          this.typesToAdd.push(result);
          this.passedTypes.push(result);
          this.typesTofilter = this.passedTypes;
        }
      }
    });
  }

  openDeleteDialog(type: Type): void {
    const dialogRef = this.dialog.open(DeleteFromTypeDialogComponent, {
      data: {
        type: type,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log("result from delete : ", result);
        if (
          this.typesToAdd.find(
            (d) => d.code == result.code && d.type == result.type
          )
        ) {
          const index = this.typesToAdd.findIndex(
            (d) => d.code == result.code && d.type == result.type
          );

          this.typesToAdd.splice(index, 1);
        } else {
          this.typesToDelete.push(result);
        }

        const newTypes = this.passedTypes.filter((d) => {
          return !(d.code == result.code && d.type == result.type);
        });
        this.passedTypes = newTypes;
        this.typesTofilter = this.passedTypes;
      }
    });
  }

  openEditDialog(type: Type): void {
    const dialogRef = this.dialog.open(EditTypeDialogComponent, {
      data: {
        type: type,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result.kvoo_s[result.kvoo_s.length - 1].operand = "";
        const t: Type = {
          id: result.id,
          type: result.type,
          code: result.code,
          description: result.description,
          kvoo_s: result.kvoo_s,
          clauses: result.clauses,
        };
        if (
          this.typesToAdd.find(
            (d) => d.code == type.code && d.type == type.type
          )
        ) {
          const index = this.typesToAdd.findIndex(
            (d) => d.code == type.code && d.type == type.type
          );
          this.typesToAdd[index] = t;
        } else {
          this.typesToUpdate.push(t);
        }

        // console.log("types to add :  ", this.typesToAdd);
        // console.log("types to update :  ", this.typesToUpdate);

        const indexInDisplayedTypes = this.passedTypes.findIndex(
          (d) => d.type == type.type && d.code == type.code
        );
        this.passedTypes[indexInDisplayedTypes] = t;
      }
    });
  }
}
