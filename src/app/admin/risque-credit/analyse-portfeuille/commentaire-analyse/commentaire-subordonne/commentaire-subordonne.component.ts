import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  Commentaire,
  CommentaireService,
} from "src/app/_services/CommentaireService/commentaire-service";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { StorageSService } from "src/app/_services/storageService/storage-s.service";
import * as _moment from "moment";
const moment = _rollupMoment || _moment;
import { default as _rollupMoment, Moment } from "moment";
import { MatDialog } from "@angular/material/dialog";
import { DialogueMotifComponent } from "../dialogue-motif/dialogue-motif.component";

@Component({
  selector: "app-commentaire-subordonne",
  templateUrl: "./commentaire-subordonne.component.html",
  styleUrls: ["./commentaire-subordonne.component.css"],
})
export class CommentaireSubordonneComponent implements OnInit {
  commentaireSubAccepte: boolean = false;
  commentaireSubRejete: boolean = false;
  commentaireSubordonne: Observable<Commentaire>;
  commentaireSub: string;
  idCommentaireSub: number;
  showAccept = true;
  disabledGenerateReport: boolean = true;
  motif: string;
  title: string = "Confirmation";
  constructor(
    private storageSer: StorageSService,
    private servicesRepo: AnalysePortfeuilleServicesService,
    private commentaireService: CommentaireService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    moment.locale("us");

    var today = moment().format("DD-MM-YYYYTHH:mm:SS[Z]");
    var year = moment().year();
    var month = moment().month() + 1;
    if (this.storageSer.getUser().roles.id === 4) this.showAccept = false;
    this.commentaireSubordonne =
      this.commentaireService.findCommentaireSubordonneByDateAndTypeAnalyse(
        this.servicesRepo.currentAnalyseType,
        this.storageSer.getUser().roles.id,
        year,
        month
      );

    this.commentaireSubordonne.subscribe({
      next: (data) => {
        if (data != null) {
          this.commentaireSub = data.commentaire;
          this.idCommentaireSub = data.id;
          this.commentaireSubAccepte =
            data.acceptedOn == undefined && data.rejectedOn == undefined
              ? false
              : true;
          this.commentaireSubRejete =
            data.rejectedOn == undefined && data.acceptedOn == undefined
              ? false
              : true;
        }
      },
      error: (error) => {
        console.log(error.error.text);
      },
    });
    if (this.storageSer.userHasGenererRapport())
      this.disabledGenerateReport = false;
  }

  accepter() {
    moment.locale("fr");
    var today = moment().format("DD-MM-YYYYTHH:mm:SS[Z]");
    var year = moment().year();
    var month = moment().month() + 1;

    this.commentaireService.accepter(this.idCommentaireSub).subscribe({
      next: () => {
        //  this.commentaireService.updateCommentaireSub(commentaire)
        this.commentaireSubordonne =
          this.commentaireService.findCommentaireSubordonneByDateAndTypeAnalyse(
            this.servicesRepo.currentAnalyseType,
            this.storageSer.getUser().roles.id,
            year,
            month
          );

        this.commentaireSubordonne.subscribe({
          next: (data) => {
            if (data != null) {
              this.commentaireSub = data.commentaire;
              this.idCommentaireSub = data.id;
              this.commentaireSubAccepte =
                data.acceptedOn == undefined && data.rejectedOn == undefined
                  ? false
                  : true;
              this.commentaireSubRejete =
                data.rejectedOn == undefined && data.acceptedOn == undefined
                  ? false
                  : true;
            }
          },
          error: (error) => {
            console.log(error.error.text);
          },
        });
        alert("Commentaire Accepté ! ");
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogueMotifComponent, {
      data: { motif: this.motif, title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.motif = result;
    });
  }
}
