import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { Domaine } from "src/app/Models/Domaine";
import { Domain } from "domain";
import { environment } from "src/environments/environment";
import { response } from "express";
import { BehaviorSubject } from "rxjs";
import { Domaine } from "src/app/Models/Domaine";

@Injectable({
  providedIn: "root",
})
export class ParametrageService {
  constructor(private http: HttpClient) {}

  allDomainesSubject = new BehaviorSubject<Domaine[]>([]);
  mapOfCheckedDomainesSubject = new BehaviorSubject<Map<string, Domaine[]>>(
    new Map<string, Domaine[]>()
  );

  isAddLoading = new BehaviorSubject<boolean>(false);
  isAddSuccess = new BehaviorSubject<boolean>(false);
  isAddError = new BehaviorSubject<boolean>(false);

  getAllDomaines() {
    this.http
      .get<Domaine[]>(environment.baseUrl + "/domaine/", {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .subscribe({
        next: (response) => {
          this.allDomainesSubject.next(response);
        },
      });
  }

  addToDomaine(domaine: Domaine) {
    this.isAddLoading.next(true);
    this.http
      .post<Domaine>(environment.baseUrl + "/domaine/", domaine, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          // Authorization: "Bearer " + sessionStorage.getItem("accessstoken"),
        }),
      })
      .subscribe({
        next: (response) => {
          const existingMapOfDomaines = this.mapOfCheckedDomainesSubject.value;
          const listOfDomaines = existingMapOfDomaines.get(domaine.domainName);
          listOfDomaines.push(response);
          existingMapOfDomaines.set(domaine.domainName, listOfDomaines);
          this.mapOfCheckedDomainesSubject.next(existingMapOfDomaines);
          this.isAddLoading.next(false);
          this.isAddSuccess.next(true);
        },
        error: (error) => {
          this.isAddLoading.next(false);
          this.isAddError.next(true);
        },
      });
  }

  addTocheckedList(key: string, value: Domaine[]) {
    const existingDomaine = this.mapOfCheckedDomainesSubject.value;
    existingDomaine.set(key, value);
    this.mapOfCheckedDomainesSubject.next(existingDomaine);
  }

  sauvgarder(domaineToSaveOrUpdateOrDelete: any) {
    console.log("to save or update or delete ", domaineToSaveOrUpdateOrDelete);
    return this.http.post(
      environment.baseUrl + "/domaine/upadateAllDomaine",
      domaineToSaveOrUpdateOrDelete
    );
  }

  removeFromCheckedList(key: string) {
    const existingDomaine = this.mapOfCheckedDomainesSubject.value;
    existingDomaine.delete(key);
    this.mapOfCheckedDomainesSubject.next(existingDomaine);
  }

  removeFromMapOfDomaines(domaine: Domaine) {
    return this.http.delete<any>(
      environment.baseUrl + "/domaine/" + domaine.id,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          // Authorization: "Bearer " + sessionStorage.getItem("accessstoken"),
        }),
      }
    );
  }

  editDomaineFromMapOfdomaines(domaine: Domaine) {
    return this.http.put<any>(
      environment.baseUrl + "/domaine/updateDomaine/" + domaine.id,
      domaine,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          // Authorization: "Bearer " + sessionStorage.getItem("accessstoken"),
        }),
      }
    );
  }

  // My observables
  mapOfCheckedDomaines$ = this.mapOfCheckedDomainesSubject.asObservable();
  allDomainesSubject$ = this.allDomainesSubject.asObservable();
  isAddLoading$ = this.isAddLoading.asObservable();
  isAddSuccess$ = this.isAddSuccess.asObservable();
  isAddError$ = this.isAddError.asObservable();
}
