import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ConcentrationService {
  constructor(private httpClient: HttpClient) {}

  listOfIds: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  listOfGroupIds: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  dataFinal: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  dataGroup: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  header: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(["Date"]);
  selectedIdText: string = "";
  selectedDate: string = "";
  fondPropres: number;
  selectedIdGroup: string;
  selectedIdClient: string;
  selectedChoice: string = "client";
  selectedChoiceIndex: number = 0;
  selectedDateClient: string;
  selectedDateGroupe: string;
  selectedIdTextGroupe: string;
  fondPropresGroupe: number;

  dataClient: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  getConcentrationClient(id: string, date: string, fondPropres: number) {
    this.selectedIdClient = id;
    this.selectedDateClient = date;
    this.selectedIdText = id;
    this.fondPropres = fondPropres;

    this.header.next(["Date"]);
    this.httpClient
      .post<any>(environment.baseUrl + `/concentration/parClient`, {
        id: id,
        dateSelect: date,
      })
      .subscribe((response) => {
        this.dataClient.next([]);
        // if (response.length == 0) this.textNoData = "Données non disponibles ";
        response.forEach((element: any) => {
          console.log("response : ", response);
          let dd: any[] = [date];
          for (const key in element) {
            if (!this.header.value.includes(this.myMapper[key])) {
              this.header.next([...this.header.value, this.myMapper[key]]);
            }
            dd.push(element[key]);
          }
          dd.push(element["risquePendree"] / fondPropres);
          this.dataClient.next([...this.dataClient.value, dd]);
        });

        if (!this.header.value.includes("Taux"))
          this.header.next([...this.header.value, "Taux"]);
      });
  }

  getConcentrationByGroup(id: string, date: string, fondPropres: number) {
    this.selectedDateGroupe = date;
    this.selectedChoice = "groupe";
    this.selectedChoiceIndex = 1;
    this.selectedIdGroup = id;
    this.selectedIdTextGroupe = id;
    this.selectedDate = date;
    this.fondPropresGroupe = fondPropres;
    this.header.next(["Date"]);
    this.httpClient
      .post<any>(environment.baseUrl + `/concentration/parGroup/`, {
        id: id,
        dateSelect: date,
      })
      .subscribe((response) => {
        this.dataGroup.next([]);
        // if (response.length == 0) this.textNoData = "Données non disponibles ";
        response.forEach((element: any) => {
          let dd: any[] = [date];
          for (const key in element) {
            if (!this.header.value.includes(this.myMapper2[key])) {
              this.header.next([...this.header.value, this.myMapper2[key]]);
            }
            dd.push(element[key]);
          }
          dd.push(element["risquePendree"] / fondPropres);
          this.dataGroup.next([...this.dataGroup.value, dd]);
        });
        if (!this.header.value.includes("Taux"))
          this.header.next([...this.header.value, "Taux"]);
      });
  }

  getClientByDate(date: string) {
    this.httpClient
      .get(environment.baseUrl + `/concentration/getIdClient/${date}`)
      .subscribe((response: string[]) => {
        this.listOfIds.next(response);
      });
  }
  getGroupByDate(date: string) {
    this.httpClient
      .get(environment.baseUrl + `/concentration/getIdGroup/${date}`)
      .subscribe((response: string[]) => {
        this.listOfGroupIds.next(response);
      });
  }

  getConcentrationClientDetails(id: string, date: string, type: string) {
    if (type == "client") {
      return this.httpClient.get(
        environment.baseUrl + `/concentration/detailParClient/${id}/${date}`
      );
    } else {
      return this.httpClient.get(
        environment.baseUrl + `/concentration/detailparGroup/${id}/${date}`
      );
    }
  }

  resetDataClient() {
    this.dataClient.next([]);
  }

  resetDataGroup() {
    this.dataGroup.next([]);
  }

  listOfIds$ = this.listOfIds.asObservable();
  listOfGroupIds$ = this.listOfGroupIds.asObservable();
  dataFinal$ = this.dataFinal.asObservable();
  dataClient$ = this.dataClient.asObservable();
  dataGroup$ = this.dataGroup.asObservable();
  header$ = this.header.asObservable();

  myMapper = {
    date: "Date",
    id: "ID Client",
    nom: "Nom Client",
    agence: "Agence",
    creditBilan: "Crédit bilan",
    garantiesBilan: "Garanties bilan",
    provision: "Provisions",
    risqueNet: "Risque net",
    engagementHorsBilan: "Engagement hors bilan",
    grantiesHorsBilan: "Garanties hors bilan",
    risquePendree: "Risque pendéré",
  };

  myMapper2 = {
    date: "Date",
    id: "ID Groupe",
    nom: "Nom Groupe",
    agence: "Agence",
    creditBilan: "Crédit bilan",
    garantiesBilan: "Garanties bilan",
    provision: "Provisions",
    risqueNet: "Risque net",
    engagementHorsBilan: "Engagement hors bilan",
    grantiesHorsBilan: "Garanties hors bilan",
    risquePendree: "Risque pendéré",
  };
}
