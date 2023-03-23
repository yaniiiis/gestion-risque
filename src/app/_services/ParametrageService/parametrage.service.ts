import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Domain } from "domain";
import { response } from "express";
import { BehaviorSubject, of, Subject } from "rxjs";
import { Domaine } from "src/app/Models/Domaine";
import { Clause, keyValueOperationOperand, Type } from "src/app/Models/Rapport";
import { environment } from "src/environments/environment";

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

  mapOfCheckedDomaines$ = this.mapOfCheckedDomainesSubject.asObservable();
  allDomainesSubject$ = this.allDomainesSubject.asObservable();
  isAddLoading$ = this.isAddLoading.asObservable();
  isAddSuccess$ = this.isAddSuccess.asObservable();
  isAddError$ = this.isAddError.asObservable();

  // */ -------------------------------------- *RAPORT SIDE* ----------------------------------------------------

  KVOOListSubject = new BehaviorSubject<keyValueOperationOperand[]>([
    {
      id: 1,
      key: "",
      value: "",
      operation: "",
      operand: "AND",
    },
  ]);
  numberOfKVOO: number = 2;
  submitIsDisabledSubject = new BehaviorSubject<boolean>(false);
  choosedKey = new BehaviorSubject<string>(undefined);
  choosedOperation = new BehaviorSubject<string>(undefined);
  givenValue = new BehaviorSubject<string>(undefined);
  clausesListSubject = new BehaviorSubject<Clause[]>([]);
  allTypesSubject = new BehaviorSubject<any>(undefined);
  mapOfCheckedTypesSubject = new BehaviorSubject<Map<string, Type[]>>(
    new Map<string, Type[]>()
  );
  getAllTypes() {
    this.http
      .get<any>(environment.baseUrl + "/parametrageRapport/groupByTypes")
      .subscribe({
        next: (response) => {
          console.log("Res Res : ", response);
          this.allTypesSubject.next(response);
        },
      });
  }

  addTocheckedTypesList(type: string, types: Type[]) {
    const checkedTypes = this.mapOfCheckedTypesSubject.value;
    checkedTypes.set(type, types);
    this.mapOfCheckedTypesSubject.next(checkedTypes);
  }

  removeFromCheckedTypesList(key: string) {
    const checkedTypes = this.mapOfCheckedTypesSubject.value;
    checkedTypes.delete(key);
    this.mapOfCheckedTypesSubject.next(checkedTypes);
  }

  sauvgarderTypes(typesToSaveOrUpdateOrDelete: any) {
    return this.http.post(
      environment.baseUrl + "/parametrageRapport/saveUpdateAll",
      typesToSaveOrUpdateOrDelete
    );
  }

  addToKVOOList(kvoo: keyValueOperationOperand) {
    const kvooS = this.KVOOListSubject.value;

    const exist = kvooS.find((k) => k.id > kvoo.id);
    if (!exist) {
      const k: keyValueOperationOperand = {
        id: this.numberOfKVOO,
        key: "",
        value: "",
        operation: "",
        operand: "AND",
      };

      const index = kvooS.findIndex((k) => k.id == kvoo.id);
      console.log("index befor : ", kvooS[index]);
      kvooS[index] = kvoo;
      console.log("index after : ", kvooS[index]);
      kvooS.push(k);
      this.numberOfKVOO += 1;

      this.KVOOListSubject.next(kvooS);
    } else {
      const index = kvooS.findIndex((k) => k.id == this.numberOfKVOO);
      kvooS[index] = kvoo;
      this.KVOOListSubject.next(kvooS);
    }
  }

  setKVOO(kvoo: keyValueOperationOperand) {
    let kVOOList = this.KVOOListSubject.value;
    const index = kVOOList.findIndex((k) => k.id === kvoo.id);
    if (index) {
      kVOOList[index] = kvoo;
      this.KVOOListSubject.next(kVOOList);
    }
  }

  setSubmitIsDisabled(b: boolean) {
    this.submitIsDisabledSubject.next(b);
  }

  deleteKVOO(id: number) {
    console.log(this.KVOOListSubject.value.length);
    if (this.KVOOListSubject.value.length > 1) {
      if (this.KVOOListSubject.value.length == 2) {
        const newKVOOList = this.KVOOListSubject.value.filter(
          (k) => k.id != id
        );
        newKVOOList[0].operand = "AND";
        this.KVOOListSubject.next(newKVOOList);
      } else {
        const newKVOOList = this.KVOOListSubject.value.filter(
          (k) => k.id != id
        );
        this.KVOOListSubject.next(newKVOOList);
      }
    } else {
      const kvooList = this.KVOOListSubject.value;
      const index = kvooList.findIndex((k) => k.id === id);
      kvooList[index] = {
        id: id,
        key: "",
        value: "",
        operation: "",
        operand: "AND",
      };
      this.KVOOListSubject.next(kvooList);
    }
  }

  deleteAfterKVOO(id: number) {
    const filtred = this.KVOOListSubject.value.filter((k) => k.id <= id);
    this.KVOOListSubject.next(filtred);
    this.numberOfKVOO = id + 1;
    console.log(this.numberOfKVOO);
  }

  resetKvooList() {
    this.numberOfKVOO = 2;
    this.KVOOListSubject.next([
      {
        id: 1,
        key: "",
        value: "",
        operation: "",
        operand: "AND",
      },
    ]);
  }

  setChoosedKey(key: string) {
    this.choosedKey.next(key);
  }

  setChoosedOperation(operation: string) {
    this.choosedOperation.next(operation);
  }

  setGivenValue(value: string) {
    this.givenValue.next(value);
  }

  addToClauseListSubject(clauses: Clause[]) {
    this.clausesListSubject.next(clauses);
  }

  deleteFromClauseList(clause: Clause) {
    const newClauseList = this.clausesListSubject.value.filter(
      (c) => c.field != clause.field || c.selection != clause.selection
    );
    this.clausesListSubject.next(newClauseList);
  }

  saveClauses() {
    console.log("Clauses : ", this.clausesListSubject.value);
  }

  resetClauseList() {
    this.clausesListSubject.next([]);
  }

  removeFromMapOfTypes(id: number) {
    return this.http.delete<any>(environment.baseUrl + "/type/" + id, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        // Authorization: "Bearer " + sessionStorage.getItem("accessstoken"),
      }),
    });
  }

  kvooToEdit: keyValueOperationOperand[] = [];

  editKvoo(
    existingKvoos: keyValueOperationOperand[],
    kvooToAdd: keyValueOperationOperand
  ) {
    const clone = structuredClone(existingKvoos);
    let existingIds: number[] = [];
    existingKvoos.forEach((k) => {
      existingIds.push(k.id);
    });
    let n = Math.max(...existingIds) + 1;
    const index = clone.findIndex(
      (k: keyValueOperationOperand) => k.id == kvooToAdd.id
    );

    if (index != -1) {
      clone[index] = kvooToAdd;
    }
    const k: keyValueOperationOperand = {
      id: n,
      key: "",
      value: "",
      operation: "",
      operand: "AND",
    };
    clone.push(k);
    n += 1;
    this.kvooToEdit = clone;
  }

  deleteForEdit(existingKvoos: keyValueOperationOperand[], id: number) {
    if (existingKvoos.length > 1) {
      if (this.kvooToEdit.length > 0) {
        this.kvooToEdit = this.kvooToEdit.filter((k) => k.id != id);
        existingKvoos = existingKvoos.filter((k) => k.id != id);
      } else {
        existingKvoos = existingKvoos.filter((k) => k.id != id);
        this.kvooToEdit = existingKvoos;
      }
    } else {
      existingKvoos[0] = {
        id: id,
        key: "",
        value: "",
        operation: "",
        operand: "AND",
      };
    }
    console.log("existing kvoos : ", existingKvoos);
  }

  KVOOListSubject$ = this.KVOOListSubject.asObservable();
  submitIsDisabledSubject$ = this.submitIsDisabledSubject.asObservable();
  choosedKey$ = this.choosedKey.asObservable();
  choosedOperation$ = this.choosedOperation.asObservable();
  givenValue$ = this.givenValue.asObservable();
  clausesListSubject$ = this.clausesListSubject.asObservable();
  allTypesSubject$ = this.allTypesSubject.asObservable();
  mapOfCheckedTypesSubject$ = this.mapOfCheckedTypesSubject.asObservable();
}
