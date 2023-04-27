import { HttpClient, HttpEventType } from "@angular/common/http";
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";
import { environment } from "src/environments/environment";
import { Subscription, finalize } from "rxjs";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent {
  @Input()
  requiredFileType: string;

  fileName = "";
  progress: number = 0;
  uploadSub: Subscription;
  selectedOption;
  url:string;
  textChargement:string ="";
  constructor(private http: HttpClient) {}

  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("file", file);

      if(this.selectedOption==="1")
      this.url="/seed"
      else if (this.selectedOption==="2")
       this.url="/seedSoldeCompte"
      else if (this.selectedOption==="3")
       this.url="/seedRisqLiqDepot" 
      else if (this.selectedOption==="4")
       this.url="/seedRisqLiqDonneesSources" 
       else if (this.selectedOption==="5")
       this.url="/seedRisqLiqRatiosDeLiquidite" 
      else if (this.selectedOption==="6")
       this.url="/seedRisqLiqDonneesActifLiquide"   
      else if (this.selectedOption==="7")
       this.url="/seedRisqLiqPlacements" 

      const upload$ = this.http
        .post(environment.baseUrl + this.url, formData, {
          reportProgress: true,
          observe: "events",
        })
        .pipe(finalize(() => this.reset()));

      this.uploadSub = upload$.subscribe((event) => {
        switch (event.type) {
          case HttpEventType.Sent:{
            console.log("Request has been made!");
            this.textChargement = "Chargement en cours !"
            break;
          }
          case HttpEventType.ResponseHeader:
            console.log("Response header has been received!");
            break;
          case HttpEventType.UploadProgress:{
            this.progress = Math.round((event.loaded / event.total) * 100);
            console.log(`Uploaded! ${this.progress}%`);
            break;
            this.textChargement+='.'
          }
          case HttpEventType.Response:{
            console.log("User successfully created!", event.body);
            alert("Fichier importé avec succes!");

            setTimeout(() => {
              this.progress = 0;
            }, 1500);
            this.textChargement = "Chargement terminé."
          }
        }
      });
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.progress = 0;
    this.uploadSub = null;
  }

  click(){
    alert
  }
}
