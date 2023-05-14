import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { duration } from "moment";
import { Subscription } from "rxjs";
import { Domaine } from "src/app/Models/Domaine";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";
import { AddToDialogComponent } from "../../common/add-to-dialog/add-to-dialog.component";
import { DeleteDialogComponent } from "../../common/delete-dialog/delete-dialog.component";
import { EditDomaineDialogComponent } from "../../common/edit-domaine-dialog/edit-domaine-dialog.component";

@Component({
  selector: "app-parametrage-domaine-table",
  templateUrl: "./parametrage-domaine-table.component.html",
  styleUrls: ["../../table-css.css"],
})
export class ParametrageDomaineTableComponent implements OnInit {
  constructor(
    private parametrageService: ParametrageService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  @Input() key: string;
  @Input() domains: Domaine[];

  doaminesToAdd: Domaine[] = [];
  doaminesToUpdate: Domaine[] = [];
  domainesToDelete: number[] = [];
  domainsTofilter: Domaine[];
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
    this.domainsTofilter = this.domains;
    this.parametrageService.isAddError$.subscribe((b) => {
      if (b)
        this.snackBar.open("Erreur lors de l'ajout", null, {
          duration: 3000,
          panelClass: ["error-snackbar"],
        });
    });

    this.parametrageService.isAddSuccess$.subscribe((b) => {
      if (b)
        this.snackBar.open("Domaine ajouté avec succcés", null, {
          duration: 3000,
          panelClass: ["success-snackbar"],
        });
    });
    this.parametrageService.isAddLoading$.subscribe((b) => {
      this.isAddLoading = b;
    });
  }

  setIsOpen() {
    this.isOpen = !this.isOpen;
  }

  searching(input: string) {
    const filtredDomains = this.domainsTofilter.filter(
      (d) => d.domainCode.includes(input) || d.description.includes(input)
    );
    this.domains = filtredDomains;
  }

  openDeleteDialog(domaine: Domaine): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        domaine: domaine,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (
          this.doaminesToAdd.find(
            (d) =>
              d.domainCode == result.domainCode &&
              d.domainName == result.domainName
          )
        ) {
          const index = this.doaminesToAdd.findIndex(
            (d) =>
              d.domainCode == result.domainCode &&
              d.domainName == result.domainName
          );

          this.doaminesToAdd.splice(index, 1);
        } else {
          this.domainesToDelete.push(result.id);
        }

        const newDomaines = this.domains.filter((d) => {
          return !(
            d.domainCode == result.domainCode &&
            d.domainName == result.domainName
          );
        });
        this.domains = newDomaines;
        this.domainsTofilter = this.domains;
      }
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddToDialogComponent, {
      data: {
        key: this.key,
        existingDomains: this.domains,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (this.domains.find((d) => d.domainCode == result.domainCode)) {
          this.snackBar.open("Ce code existe déja dans ce domaine", null, {
            duration: 6000,
            panelClass: ["error-snackbar"],
          });
        } else {
          this.doaminesToAdd.push(result);
          this.domains.push(result);
          this.domainsTofilter = this.domains;
        }
      }
    });
  }

  sauvgarderClick() {
    this.saveIsLoading = true;
    const data = {
      domaineToSave: this.doaminesToAdd,
      domaineToUpdate: this.doaminesToUpdate,
      domaineToDelete: this.domainesToDelete,
    };
    this.parametrageService.sauvgarder(data).subscribe({
      next: (response) => {
        console.log("resposne from sauvgarder api ", response);
        this.saveIsLoading = false;
        this.saveIsSuccess = true;
        this.doaminesToAdd = [];
        this.doaminesToUpdate = [];
        this.domainesToDelete = [];
        this.snackBar.open("Sauvgardé(s) avec succée", null, {
          duration: 3000,
          panelClass: ["success-snackbar"],
        });
      },
      error: (error) => {
        console.log("error from sauvgarder api ", error);

        this.saveIsLoading = false;
        this.saveHasError = true;
        this.snackBar.open("Erreur de connexion", null, {
          duration: 3000,
          panelClass: ["error-snackbar"],
        });
      },
    });
  }

  openEditDialog(domaine: Domaine): void {
    const dialogRef = this.dialog.open(EditDomaineDialogComponent, {
      data: {
        domaine: domaine,
      },
      // enterAnimationDuration: "300ms",
      // exitAnimationDuration: "500ms",
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        //this.isEditLoading = true;
        const dm: Domaine = {
          id: result.id,
          domainName: result.domainName,
          domainCode: result.domainCode,
          description: result.description,
          dateFin: result.dateFin.toString().substring(0, 10),
        };

        if (
          this.doaminesToAdd.find(
            (d) =>
              d.domainCode == domaine.domainCode &&
              d.domainName == domaine.domainName
          )
        ) {
          const index = this.doaminesToAdd.findIndex(
            (d) =>
              d.domainCode == domaine.domainCode &&
              d.domainName == domaine.domainName
          );
          this.doaminesToAdd[index] = dm;
        } else {
          this.doaminesToUpdate.push(dm);
        }
        const indexInDisplayedDomaines = this.domains.findIndex(
          (d) =>
            d.domainName == domaine.domainName &&
            d.domainCode == domaine.domainCode
        );
        this.domains[indexInDisplayedDomaines] = dm;
      }
    });
  }
}
