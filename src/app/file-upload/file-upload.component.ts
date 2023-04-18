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
  constructor(private http: HttpClient) {}

  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("file", file);

      if(this.selectedOption==="1")
      this.url="/seed"
      else this.url="/seedSoldeCompte"

      const upload$ = this.http
        .post(environment.baseUrl + this.url, formData, {
          reportProgress: true,
          observe: "events",
        })
        .pipe(finalize(() => this.reset()));

      this.uploadSub = upload$.subscribe((event) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log("Request has been made!");
            break;
          case HttpEventType.ResponseHeader:
            console.log("Response header has been received!");
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round((event.loaded / event.total) * 100);
            console.log(`Uploaded! ${this.progress}%`);
            break;
          case HttpEventType.Response:
            console.log("User successfully created!", event.body);
            alert("Fichier importé avec succes!");

            setTimeout(() => {
              this.progress = 0;
            }, 1500);
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
