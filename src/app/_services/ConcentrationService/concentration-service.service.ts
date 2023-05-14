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

  getConcentrationClient(id: string, date: string) {
    return this.httpClient.post<any>(
      environment.baseUrl + `/concentration/parClient`,
      {
        id: id,
        dateSelect: date,
      }
    );
  }

  getConcentrationByGroup(id: string, date: string) {
    return this.httpClient.post<any>(
      environment.baseUrl + `/concentration/parGroup`,
      {
        id: id,
        dateSelect: date,
      }
    );
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
        this.listOfIds.next(response);
      });
  }

  getConcentrationClientDetails(id: string, date: string, type: string) {
    return this.httpClient.get(
      environment.baseUrl + `/concentration/detailParClient/${id}/${date}`
    );
  }

  listOfIds$ = this.listOfIds.asObservable();
}
