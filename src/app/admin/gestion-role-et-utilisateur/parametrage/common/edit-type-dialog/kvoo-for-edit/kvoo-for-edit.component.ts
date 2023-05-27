import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

import { Subscription } from "rxjs";
import { keyValueOperationOperand } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-kvoo-for-edit",
  templateUrl: "./kvoo-for-edit.component.html",
  styleUrls: ["./kvoo-for-edit.component.css"],
})
export class KvooForEditComponent implements OnInit {
  constructor(
    private parametrageService: ParametrageService,
    private snackBar: MatSnackBar
  ) {}

  // formGroupe = this.parametrageService.formGroup;

  @Input() kVOO: keyValueOperationOperand;
  @Input() existingKvoos: keyValueOperationOperand[];
  @Input() deleteKvooCallback: (id: number) => void;
  @Input() addKvooCallback: (k: keyValueOperationOperand, m: number) => void;

  formGroupe: FormGroup;
  operandClicked: boolean = false;

  isListKeyOpen: boolean = false;
  isListOperationOpen: boolean = false;

  choosedKey: string;
  choosedOperation: string;
  givenValue: string;

  keyHasError: boolean = false;
  operationHasError: boolean = false;
  plusClicked: boolean = false;

  keysToDisplay: string[];
  keysToFilter: string[];
  operationsToDisplay: string[];
  operationsToFilter: string[];

  // SUBSCRAPTION
  choosedKeySubscraption: Subscription;
  choosedOperationSubscraption: Subscription;
  givenValueSubscraption: Subscription;

  ngOnInit(): void {
    console.log("Existing kvoos : ", this.existingKvoos);
    this.formGroupe = new FormGroup({
      key: new FormControl(this.kVOO.key, [Validators.required]),
      value: new FormControl(this.kVOO.value, [Validators.required]),
      operation: new FormControl(
        this.operationsMapOpposit[this.kVOO.operation],
        [Validators.required]
      ),
      operand: new FormControl(
        this.kVOO.operand == "true"
          ? "AND"
          : this.kVOO.operand == "false"
          ? "OR"
          : "",
        [Validators.required]
      ),
    });

    if (this.kVOO.key.length >= 1) this.choosedKey = this.kVOO.key;
    if (this.kVOO.value.length >= 1) this.givenValue = this.kVOO.value;
    if (this.kVOO.operation.length >= 1)
      this.choosedOperation = this.kVOO.operation;

    // this.onFormChange();

    this.keysToDisplay = this.keys;
    this.keysToFilter = this.keys;

    this.operationsToDisplay = this.operations;
    this.operationsToFilter = this.operations;
  }

  plusClick() {
    this.plusClicked = true;
    if (
      this.choosedKey &&
      this.choosedOperation &&
      this.givenValue &&
      this.operand.valid
    ) {
      const newKVOO: keyValueOperationOperand = {
        id: this.kVOO.id,
        key: this.choosedKey,
        value: this.value.value,
        operation: this.choosedOperation,
        operand: this.operand.value,
      };

      this.parametrageService.editKvoo(this.existingKvoos, newKVOO);

      let arr: number[] = [];
      this.parametrageService.kvooToEdit.forEach((k) => {
        arr.push(k.id);
      });
      const m = Math.max(...arr);
      this.addKvooCallback(newKVOO, m);

      // this.parametrageService.addToKVOOList(newKVOO);
      this.plusClicked = false;
      this.parametrageService.setSubmitIsDisabled(false);
    } else {
      this.snackBar.open("requete invalide", null, {
        duration: 2000,
        panelClass: ["error-snackbar"],
      });
    }
  }

  deleteClick() {
    // this.deleteKvoo(this.kVOO.id);
    // this.parametrageService.deleteKVOO(this.kVOO.id);

    this.parametrageService.deleteForEdit(this.existingKvoos, this.kVOO.id);
    this.deleteKvooCallback(this.kVOO.id);
  }

  toggleKeysList() {
    this.isListKeyOpen = !this.isListKeyOpen;
  }

  toggleOperationsList() {
    this.isListOperationOpen = !this.isListOperationOpen;
  }

  keyClicked(item: string) {
    this.choosedKey = item;
    this.kVOO.key = item;
    this.keyHasError = false;
    // this.formGroupe.patchValue({
    //   operand: undefined,
    // });
    //this.parametrageService.setKVOO(this.kVOO);
    //this.parametrageService.setChoosedKey(item);
    this.isListKeyOpen = false;
    this.formGroupe.patchValue({
      key: item,
    });
    if (!this.choosedOperation || this.value.invalid)
      this.parametrageService.setSubmitIsDisabled(true);
    else if (this.choosedOperation && this.value.valid)
      this.parametrageService.setSubmitIsDisabled(false);
  }

  operationClicked(item: string) {
    this.choosedOperation = this.operationsMap[item];
    this.kVOO.operation = this.operationsMap[item];
    this.operationHasError = false;
    // this.formGroupe.patchValue({
    //   operand: undefined,
    // });
    // this.parametrageService.setKVOO(this.kVOO);
    //this.parametrageService.setChoosedOperation(item);
    this.isListOperationOpen = false;
    this.formGroupe.patchValue({
      operation: item,
    });
    if (!this.choosedKey || this.value.invalid)
      this.parametrageService.setSubmitIsDisabled(true);
    else if (this.choosedKey && this.value.valid)
      this.parametrageService.setSubmitIsDisabled(false);
  }

  valueKeyup(item: string) {
    if (this.value.valid) {
      this.givenValue = item;
      this.kVOO.value = this.givenValue;
      // this.formGroupe.patchValue({
      //   operand: undefined,
      // });
      // this.parametrageService.setKVOO(this.kVOO);
      //this.parametrageService.setGivenValue(item);
    } else this.givenValue = undefined;
    if (!this.choosedOperation || !this.choosedKey || this.value.invalid)
      this.parametrageService.setSubmitIsDisabled(true);
    else if (this.choosedOperation && this.choosedKey)
      this.parametrageService.setSubmitIsDisabled(false);
  }

  operandChange(event: any) {
    if (this.existingKvoos.find((k) => k.id == this.kVOO.id)) {
      if (event.value == "AND") {
        this.kVOO.operand = "true";
      } else {
        this.kVOO.operand = "false";
      }
    }
  }

  filterKeys(input: string) {
    this.choosedKey = undefined;
    this.keysToDisplay = this.keysToFilter.filter((k) => k.includes(input));
    this.parametrageService.setSubmitIsDisabled(true);
  }

  filterOperations(input: string) {
    this.choosedOperation = undefined;
    this.parametrageService.setSubmitIsDisabled(true);
    this.operationsToDisplay = this.operationsToFilter.filter((k) =>
      k.includes(input)
    );
  }

  get key() {
    return this.formGroupe.get("key");
  }

  get value() {
    return this.formGroupe.get("value");
  }

  get operation() {
    return this.formGroupe.get("operation");
  }

  get operand() {
    return this.formGroupe.get("operand");
  }

  keys = ["GL_SUBHEAD", "TYPE_ENGAGEMENT", "customerType", "MAIN_PROD_DESC"];
  operations = [
    "Egale",
    "Like",
    "Supérieur",
    "Supérieur ou égale",
    "Inférieur",
    "Inférieur ou égale",
  ];

  operationsMap = {
    Egale: "=",
    Like: "like",
    Supérieur: ">",
    "Supérieur ou égale": ">=",
    Inférieur: "<",
    "Inférieur ou égale": "<=",
  };

  operationsMapOpposit = {
    "=": "Egale",
    like: "Like",
    ">": "Supérieur",
    ">=": "Supérieur ou égale",
    "<": "Inférieur",
    "<=": "Inférieur ou égale",
  };
}
