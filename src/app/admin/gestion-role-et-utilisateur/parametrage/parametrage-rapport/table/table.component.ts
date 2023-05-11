import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RapportLine } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";
import { AddToTypeDialogComponent } from "../../common/add-to-type-dialog/add-to-type-dialog.component";
import { DeleteFromTypeDialogComponent } from "../../common/delete-from-type-dialog/delete-from-type-dialog.component";
import { EditTypeDialogComponent } from "../../common/edit-type-dialog/edit-type-dialog.component";
import { ParametrageRapportComponent } from "../parametrage-rapport.component";
import { AddUnderTypeComponent } from "../../common/add-under-type/add-under-type.component";
import { DeleteTypeComponent } from "../../common/delete-type/delete-type.component";
import { SecondDeleteDialogComponent } from "../../common/second-delete-dialog/second-delete-dialog.component";
import { element } from "protractor";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["../../table-css.css", "./table.component.css"],
})
export class TableComponent implements OnInit {
  constructor(
    private parametrageService: ParametrageService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  @Input() type: string;
  @Input() passedRapportsLine: RapportLine[];

  typesToAdd: any[] = [];
  typesToUpdate: RapportLine[] = [];
  typesToDelete: any[] = [];
  typesTofilter: RapportLine[];
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

  //under type
  listUnderType: string[] = [];
  rapportLinesIsShown: boolean = false;
  choosedUnderType: string;
  rapportLinesTypesToFilter: RapportLine[];

  ngOnInit(): void {
    this.typesTofilter = this.passedRapportsLine;
    this.passedRapportsLine.forEach((rapportLine) => {
      if (!this.listUnderType.includes(rapportLine.sousType)) {
        this.listUnderType.push(rapportLine.sousType);
      }
    });
    this.rapportLinesTypesToFilter = this.passedRapportsLine;
  }

  setIsOpen() {
    this.isOpen = !this.isOpen;
  }

  searching(input: string) {
    const filtredDomains = this.typesTofilter.filter(
      (d) => d.code.includes(input) || d.description.includes(input)
    );
    this.passedRapportsLine = filtredDomains;
  }

  sauvgarderClick() {
    this.saveIsLoading = true;

    const data = {
      typesToSave: this.typesToAdd,
      typesToUpdate: this.typesToUpdate,
      typesToDelete: this.typesToDelete,
      typeTitle: this.type,
    };

    this.parametrageService.sauvgarderTypes(data).subscribe({
      next: (response) => {
        this.saveIsLoading = false;
        this.saveIsSuccess = true;
        this.typesToAdd = [];
        this.typesToUpdate = [];
        this.typesToDelete = [];
        this.snackBar.open("Sauvgardé(s) avec succée", null, {
          duration: 3000,
          panelClass: ["success-snackbar"],
        });
        // this.typesToAdd.forEach((element) => {
        //   this.passedRapportsLine.push(element);
        // });
        // this.typesToUpdate.forEach((element) => {
        //   let index = this.passedRapportsLine.findIndex(
        //     (e) => element.code == e.code
        //   );
        //   if (index) this.passedRapportsLine[index] = element;
        // });
        // this.typesToDelete.forEach((element) => {
        //   let index = this.passedRapportsLine.findIndex(
        //     (e) => element.code == e.code
        //   );
        //   if (index) this.passedRapportsLine.splice(index, 1);
        // });
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
        existingTypes: this.passedRapportsLine,
        choosedUnderType: this.choosedUnderType,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log("  66 ", result.kvoo_s[result.kvoo_s.length - 1]);
        delete result.kvoo_s[result.kvoo_s.length - 1].operand;

        if (this.passedRapportsLine.find((d) => d.code == result.code)) {
          this.snackBar.open("Ce code existe déja dans ce type", null, {
            duration: 6000,
            panelClass: ["error-snackbar"],
          });
        } else {
          result["sousType"] = this.choosedUnderType;
          this.typesToAdd.push(result);
          this.passedRapportsLine.push(result);
          this.typesTofilter = this.passedRapportsLine;
        }
      }
    });
  }

  openDeleteDialog(type: RapportLine): void {
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

        const newTypes = this.passedRapportsLine.filter((d) => {
          return !(d.code == result.code && d.type == result.type);
        });
        this.passedRapportsLine = newTypes;
        this.typesTofilter = this.passedRapportsLine;
      }
    });
  }

  openEditDialog(type: RapportLine): void {
    const dialogRef = this.dialog.open(EditTypeDialogComponent, {
      data: {
        type: type,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result.kvoo_s[result.kvoo_s.length - 1].operand = "";
        const t: RapportLine = {
          id: result.id,
          type: result.type,
          code: result.code,
          description: result.description,
          kvoo_s: result.kvoo_s,
          clauses: result.clauses,
          sousType: this.choosedUnderType,
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

        const indexInDisplayedTypes = this.passedRapportsLine.findIndex(
          (d) => d.type == type.type && d.code == type.code
        );
        this.passedRapportsLine[indexInDisplayedTypes] = t;
      }
    });
  }

  handleShowLine(underType: string) {
    this.choosedUnderType = underType;
    this.rapportLinesIsShown = true;
    this.passedRapportsLine = this.rapportLinesTypesToFilter.filter(
      (rl) => rl.sousType == underType
    );
  }

  hiddenRapportLines() {
    this.rapportLinesIsShown = false;
    this.parametrageService.getRapportLinesGroupedByType();
  }

  handleAddUnderType() {
    const dialogRef = this.dialog.open(AddUnderTypeComponent, {
      data: {
        type: this.type,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let underType: string = result.underType;
        if (!this.listUnderType.includes(underType)) {
          this.listUnderType.push(underType);
        } else {
          this.snackBar.open("Ce sous type existe déja dans ce type", null, {
            duration: 5000,
            panelClass: ["error-snackbar"],
          });
        }
      }
    });
  }

  deleteType(type: string) {
    const dialogRef = this.dialog.open(DeleteTypeComponent, {
      data: {
        type: type,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.parametrageService.deleteType(type).subscribe({
          next: (response) => {
            this.passedRapportsLine = this.passedRapportsLine.filter((r) => {
              r.type != type;
            });
          },
          error: (err) => {
            console.log("Error : ", err);
          },
        });
      }
    });
  }

  deleteUnderType(item: string) {
    const dialogRef = this.dialog.open(SecondDeleteDialogComponent, {
      data: {
        title: "Supprimer " + item,
        text:
          "En supprimant " +
          item +
          " toute les ligne avec ce sous rapport seront supprimer \n etes vous sur de vouloir continuer ?",
        item: item,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.listUnderType = this.listUnderType.filter(
          (element) => element != result.item
        );
        this.rapportLinesIsShown = false;
      }
      console.log("new list underType : ", this.listUnderType);
    });
  }
}
