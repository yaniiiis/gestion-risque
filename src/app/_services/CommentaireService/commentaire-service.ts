import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { StorageSService } from "../storageService/storage-s.service";
const baseUrl = environment.baseUrl;

export interface Commentaire{
  id: any,
analyseId:any,
createdOn: any,
acceptedOn: any,
rejectedOn: any,
motifRejet: any,
roleId: any,
commentaire: any
};

@Injectable({
  providedIn: "root",
})
export class CommentaireService {
  commentaireAnalyse: any;
  currentCommentaire: Subject<Commentaire> = new Subject<Commentaire>();
  commentaireSub: Subject<Commentaire> = new Subject<Commentaire>();
  constructor(private httpClient: HttpClient, private storageSer: StorageSService) {}

  public enregistrer(formData: any) {
    return this.httpClient.post(baseUrl + "/enregistrerCommentaire", formData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  public  accepter(id: any) : Observable<any>{
    return this.httpClient.post(baseUrl + "/accepterCommentaire/"+id, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }
  public rejeter(id: any, motif: any) {
    return this.httpClient.post(baseUrl + "/rejeterCommentaire/" + id ,motif,  {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.storageSer.getToken(),
      }),
    });
  }

  findCommentaireSubordonneByDateAndTypeAnalyse(typeAnalyse, roleId, year, month) {
       
   return this.httpClient
      .get<Commentaire>(environment.baseUrl + "/findCommentaireSubordonneByDateAndTypeAnalyse/" + typeAnalyse +  "/" + roleId +  "/" + year + "/" + month, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      });
  }

findCurrentCommentaireByDateAndTypeAnalyse(typeAnalyse, roleId, year, month) {
       
    return this.httpClient
       .get<Commentaire>(environment.baseUrl + "/findCurrentCommentaireByDateAndTypeAnalyse/" + typeAnalyse +  "/"+ roleId +  "/" + year + "/" + month, {
         headers: new HttpHeaders({
           "Content-Type": "application/json",
         }),
       });
   }
   
   updateCurrentCommentaire(commentaire: Commentaire){
    this.currentCommentaire.next(commentaire);
   }

   updateCommentaireSub(commentaire: Commentaire){
    this.commentaireSub.next(commentaire);
   }
}
