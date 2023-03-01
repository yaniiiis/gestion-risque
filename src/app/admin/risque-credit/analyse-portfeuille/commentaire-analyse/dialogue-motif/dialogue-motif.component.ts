import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { CommentaireService } from "src/app/_services/CommentaireService/commentaire-service";
import { StorageSService } from "src/app/_services/storageService/storage-s.service";
import moment from "moment";

export interface DialogData {
  motif: string;
  title: string;
}

@Component({
  selector: "app-dialogue-motif",
  templateUrl: "./dialogue-motif.component.html",
  styleUrls: ["./dialogue-motif.component.css"],
})
export class DialogueMotifComponent implements OnInit {
  commentaireSubordonne: any;
  commentaireSub: any;
  idCommentaireSub: any;
  constructor(
    public dialogRef: MatDialogRef<DialogueMotifComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private commentaireService: CommentaireService,
    private storageSer: StorageSService
  ) {}
  ngOnInit(): void {
    moment.locale('us');
    var today = moment().format("DD-MM-YYYYTHH:mm:SS[Z]")
    var year = moment().year();
    var month = moment().month() + 1;

    this.commentaireSubordonne = this.commentaireService.findCommentaireSubordonneByDate(this.storageSer.getUser().roles.id, year, month);
    
   this.commentaireSubordonne.subscribe({
      next: (data) => {
        this.commentaireSub = data.commentaire
        this.idCommentaireSub = data.id
           }
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.rejeter()
  }
  
  rejeter(){
    moment.locale('us');
    var today = moment().format("DD-MM-YYYYTHH:mm:SS[Z]")
    
    
    this.commentaireService.rejeter(this.idCommentaireSub, this.data.motif).subscribe({
      next: () => {
         
        alert("Commentaire Rejeté ! ");
                },
      error: (error) => {
         console.log(error);
      
      },
    });
   }
}
