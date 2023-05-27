import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { duration, ISO_8601 } from "moment";
import { Subscription } from "rxjs";
import { keyValueOperationOperand } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";

@Component({
  selector: "app-key-value-operand",
  templateUrl: "./key-value-operand.component.html",
  styleUrls: ["./key-value-operand.component.css"],
})
export class KeyValueOperandComponent implements OnInit {
  constructor(
    private parametrageService: ParametrageService,
    private snackBar: MatSnackBar
  ) {}

  // formGroupe = this.parametrageService.formGroup;

  @Input() kVOO: keyValueOperationOperand;
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
    this.formGroupe = new FormGroup({
      key: new FormControl(this.kVOO.key, [Validators.required]),
      value: new FormControl(this.kVOO.value, [Validators.required]),
      operation: new FormControl(
        this.operationsMapOpposit[this.kVOO.operation],
        [Validators.required]
      ),
      operand: new FormControl(this.kVOO.operand == "false" ? "OR" : "AND", [
        Validators.required,
      ]),
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
        operand: this.operand.value == "AND" ? "true" : "false",
      };
      this.parametrageService.addToKVOOList(newKVOO);
      this.plusClicked = false;
      this.parametrageService.setSubmitIsDisabled(false);
    } else {
      this.snackBar.open("requete invalide", null, {
        duration: 2000,
        panelClass: ["error-snackbar"],
      });
    }
  }

  operandChange() {
    this.operandClicked = true;
    if (
      this.choosedKey &&
      this.choosedOperation &&
      this.givenValue &&
      this.operand.valid
    ) {
      this.parametrageService.setSubmitIsDisabled(false);
      const newKVOO: keyValueOperationOperand = {
        id: this.kVOO.id,
        key: this.choosedKey,
        value: this.value.value,
        operation: this.choosedOperation,
        operand: this.operand.value,
      };
      //  this.parametrageService.setSubmitIsDisabled(false);
      //  this.parametrageService.setKVOO(newKVOO);

      if (this.operand.value.trim() != "Aucun") {
        this.parametrageService.addToKVOOList(newKVOO);
      } else {
        this.parametrageService.deleteAfterKVOO(this.kVOO.id);
      }
      this.operationHasError = false;
      this.keyHasError = false;
    } else {
      if (!this.choosedOperation) this.operationHasError = true;
      if (!this.choosedKey) this.keyHasError = true;
      this.snackBar.open("requete invalide", null, {
        duration: 2000,
        panelClass: ["error-snackbar"],
      });
      this.formGroupe.patchValue({
        operand: undefined,
      });
    }
  }
  oClick() {
    console.log("operand clicked");
  }
  onFormChange() {
    this.formGroupe.valueChanges.subscribe((v) => {
      //console.log("V : ", this.formGroupe);
      //  console.log("value : ", v.key);
      if (this.formGroupe.invalid)
        if (v.key != "" || v.value != "" || v.operation != "") {
          this.parametrageService.setSubmitIsDisabled(true);
        } else if (
          v.key == "" &&
          v.value == "" &&
          v.operation == "" &&
          v.operand == ""
        ) {
          this.parametrageService.setSubmitIsDisabled(false);
        }
    });
  }

  deleteClick() {
    this.parametrageService.deleteKVOO(this.kVOO.id);
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
    "Supérieur",
    "Supérieur ou égale",
    "Inférieur",
    "Inférieur ou égale",
    "Commence par",
  ];
  operationsMap = {
    Egale: "=",
    Supérieur: ">",
    "Supérieur ou égale": ">=",
    Inférieur: "<",
    "Inférieur ou égale": "<=",
    "Commence par": "like",
  };
  operationsMapOpposit = {
    "=": "Egale",
    ">": "Supérieur",
    ">=": "Supérieur ou égale",
    "<": "Inférieur",
    "<=": "Inférieur ou égale",
    like: "Commence par",
  };
}
