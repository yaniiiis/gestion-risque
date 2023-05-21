import { DatePipe, formatDate } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AnalyseService } from "src/app/_services/analyse.service";
import {
  Commentaire,
  CommentaireService,
} from "src/app/_services/CommentaireService/commentaire-service";
import { StorageSService } from "src/app/_services/storageService/storage-s.service";
import { environment } from "src/environments/environment";
import moment from "moment";
import { Observable } from "rxjs";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogueMotifComponent } from "../dialogue-motif/dialogue-motif.component";

const baseUrl = environment.baseUrl;

@Component({
  selector: "app-commentaire-editor",
  templateUrl: "./commentaire-editor.component.html",
  styleUrls: ["./commentaire-editor.component.css"],
})
export class CommentaireEditorComponent implements OnInit {
  submitted: boolean;
  errorMessage: any;

  form: FormGroup;

  currentCommentaireObs: Observable<Commentaire>;
  currentCommentaire: string;

  boutonEnregistrerStatus: boolean = false;
  @Input("currentAnalyseType") currentAnalyseType;

  constructor(
    private commentaireService: CommentaireService,
    public fb: FormBuilder,
    private storageSer: StorageSService,
    private analyseService: AnalyseService
  ) {
    this.form = this.fb.group({
      id: 0,
      commentaire: new FormControl(),
      roleId: { id: 0 },
      userId: { id: 0 },
      analyseId: { id: 0 },
    });
  }

  ngOnInit(): void {
    moment.locale("us");
    var today = moment().format("DD-MM-YYYYTHH:mm:SS[Z]");
    var year = moment().year();
    var month = moment().month() + 1;
    console.log("cuurent analyse type : " + this.currentAnalyseType);
    this.currentCommentaireObs =
      this.commentaireService.findCurrentCommentaireByDateAndTypeAnalyse(
        this.currentAnalyseType,
        this.storageSer.getUser().roles.id,
        year,
        month
      );

    this.currentCommentaireObs.subscribe((data) => {
      next: {
        console.log("data " + data);
        if (data !== null) {
          this.form.get("id").setValue(data.id);
          this.currentCommentaire = data.commentaire;

          if (data.motifRejet !== undefined && data.motifRejet !== null) {
            this.currentCommentaire =
              this.currentCommentaire +
              "   Rejeté pour motif : (" +
              data.motifRejet +
              ")";
          }
          console.log("comm0 : " + this.currentCommentaire);
          this.form.get("commentaire").setValue(this.currentCommentaire);
          console.log("data.acceptedOn : " + data.acceptedOn);
          if (data.acceptedOn === undefined || data.acceptedOn === null) {
            this.boutonEnregistrerStatus = false;
          } else {
            this.boutonEnregistrerStatus = true;
          }
        } else {
          this.currentCommentaire = null;
        }
      }
      error: {
        this.currentCommentaire = null;
      }
    });
  }

  ngAfterViewInit(): void {}

  enregistrer() {
    // this.form.get('commentaire').setValue("commentaire");
    // this.form.get('roleId').setValue("{id:2}");
    // this.form.get('analyseId').setValue("{id:2}");
    //formData.append("commentaire", this.form.get('commentaire').value);

    moment.locale("us");
    var today = moment().format("DD-MM-YYYYTHH:mm:SS[Z]");
    // var dd = String(today.getDate()+1).padStart(2, '0');
    var mm = moment().month() + 1;
    // var yyyy = today.getFullYear();

    //var todaymilis = Date.parse(today) ;
    console.log("Month : " + mm);

    let analyseId: Number;
    this.analyseService
      .getAnalyseIdByMonthAndType(mm, this.currentAnalyseType)
      .subscribe({
        next: (data) => {
          console.log(data);
          analyseId = Number.parseInt(data.id);
          console.log("user : " + this.storageSer.getUser().id);
          let roleId = this.storageSer.getUser().roles.id;
          let userId = this.storageSer.getUser().id;
          let formData;
          if (this.form.get("id") !== null) {
            formData = {
              id: this.form.get("id").value,
              commentaire: this.form.get("commentaire").value,
              createdOn: today,
              roleId: { id: roleId },
              userId: { id: userId },
              analyseId: { id: analyseId },
            };
          } else {
            formData = {
              commentaire: this.form.get("commentaire").value,
              createdOn: today,
              roleId: { id: roleId },
              userId: { id: userId },
              analyseId: { id: analyseId },
            };
          }
          //console.log(formData);

          this.commentaireService.enregistrer(formData).subscribe({
            next: (data) => {
              //
              console.log(formData);
              alert("Commentaire enregistré ! ");
            },
            error: (error) => {
              console.log(error);
              this.errorMessage = error.error.text;
            },
          });
        },
        error: (err) => {
          // this.errormessage = err.error.message;
          analyseId = 0;
        },
      }).unsubscribe;

    this.boutonEnregistrerStatus = true;
  }
}
