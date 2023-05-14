import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RapportGenerationServiceService {
  constructor(private http: HttpClient) {}

  generatedRapport: Map<string, any>;
  rapportTypeName: string;

  generateRapport(rapportId: number, date: string) {
    let params = new HttpParams().set("id", rapportId).set("dateReport", date);
    return this.http.get(
      environment.baseUrl +
        "/parametrageRapport/genrerRap/" +
        rapportId +
        "/" +
        date
    );
  }

  setGeneratedRapport(rapport: any, rapportTypeName: string) {
    this.generatedRapport = rapport;
    this.rapportTypeName = rapportTypeName;
  }
}
