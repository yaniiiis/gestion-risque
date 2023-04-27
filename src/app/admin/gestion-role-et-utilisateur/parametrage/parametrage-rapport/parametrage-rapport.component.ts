import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Clause, keyValueOperationOperand } from "src/app/Models/Rapport";
import { ParametrageService } from "src/app/_services/ParametrageService/parametrage.service";
import { ClauseDialogComponent } from "../common/clause-dialog/clause-dialog.component";

@Component({
  selector: "app-parametrage-rapport",
  templateUrl: "./parametrage-rapport.component.html",
  styleUrls: ["./parametrage-rapport.component.css"],
})
export class ParametrageRapportComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private parametrageService: ParametrageService,
    public dialogRef: MatDialogRef<ParametrageRapportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  numberOfKVOO = 1;
  ngOnInit(): void {
    this.parametrageService.KVOOListSubject$.subscribe((l) => {
      this.kVooList = l;
    });

    this.parametrageService.submitIsDisabledSubject$.subscribe((b) => {
      this.submitIsDisabled = b;
    });

    this.parametrageService.clausesListSubject$.subscribe((c) => {
      this.choosedClauses = c;
    });
    this.formGroup2 = new FormGroup({
      code: new FormControl("", [Validators.required]),
      operation: new FormControl("", [Validators.required]),
      code2: new FormControl("", [Validators.required]),
      secondArithmetic: new FormGroup({
        code: new FormControl("", [Validators.required]),
        operation: new FormControl("", [Validators.required]),
        code2: new FormControl("", [Validators.required]),
      }),
    });

    this.formGroup2Arithmetic = new FormGroup({});
  }

  filledKVOONumber: any[];
  kVooList: keyValueOperationOperand[] = [];
  submitIsDisabled: boolean;
  choosedClauses: Clause[];
  isRequest: boolean = true;
  isSecondArethmeticOperation: boolean = false;
  divided: boolean = false;

  selectedValue = "Requete";

  // for arithmetic side
  selectedArithmetic1_1: string;
  selectedArithmeticOperation1: string;
  selectedArithmetic1_2: string;
  selectedArithmetic2_1: string;
  selectedArithmeticOperation2: string;
  selectedArithmetic2_2: string;
  selectedMiddleOperation: string = "/";

  hasError1_1 = false;
  hasErrorOperation_1 = false;
  hasError1_2 = false;
  hasErrorOperationMiddle = false;
  hasError2_1 = false;
  hasErrorOperation_2 = false;
  hasError2_2 = false;

  addToKeyValueOperationArray() {}

  // formGroup = this.parametrageService.formGroup;

  formGroup = new FormGroup({
    code: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
  });

  formGroup2: FormGroup;
  formGroup2Arithmetic: FormGroup;

  onSubmit() {
    this.kVooList[this.kVooList.length - 1].operand = "";
    this.parametrageService.resetClauseList();
    this.parametrageService.resetKvooList();
  }

  isButtonDisabled() {
    return (
      this.formGroup.invalid ||
      this.submitIsDisabled ||
      this.choosedClauses.length < 1
    );
  }

  get code() {
    return this.formGroup.get("code");
  }

  get description() {
    return this.formGroup.get("description");
  }

  get key() {
    return this.formGroup.get("keyValueOperationOperand.key");
  }

  get operand() {
    return this.formGroup.get("keyValueOperationOperand.operand");
  }

  openClauseDialog() {
    const dialogRef = this.dialog.open(ClauseDialogComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  closeDialog() {
    this.dialogRef.close();
  }

  operationsToDisplay = ["+", "-", "*", "/"];
  codesToDisplay = ["aval", "caution"];
  isListCodes2Open: boolean = false;

  toggleCodesList2() {
    this.isListCodes2Open = !this.isListCodes2Open;
  }

  showSecondArithmeticOperation() {
    this.divided = true;
    this.isSecondArethmeticOperation = true;
  }

  addArithmetic() {
    console.log(
      "( " +
        this.selectedArithmetic1_1 +
        " " +
        this.selectedArithmeticOperation1 +
        " " +
        this.selectedArithmetic1_2 +
        " )" +
        this.selectedMiddleOperation +
        "( " +
        this.selectedArithmetic2_1 +
        " " +
        this.selectedArithmeticOperation2 +
        " " +
        this.selectedArithmetic2_2 +
        " )"
    );
    // console.log(this.arithmeticCode.value);
    // console.log(this.arithmeticOperation.value);
    // console.log(this.arithmeticCode2.value);

    // console.log("divided : ", this.divided);

    // console.log("2 : ", this.secondArithmeticCode.value);
    // console.log("2 : ", this.secondArithmeticOperation.value);
    // console.log("2 : ", this.secondArithmeticCode2.value);

    // console.log("type : ", this.data.key);
    // console.log("underType : ", this.data.choosedUnderType);
  }

  deleteSecondeArithmeticOperationClick() {
    this.divided = false;
    this.isSecondArethmeticOperation = false;
    this.formGroup2.get("secondArithmetic").patchValue({
      code: "",
      operation: "",
      code2: "",
    });
  }

  onRequestOrArithmeticChanged(event: any) {
    this.selectedValue = event;
    if (event.value == "Requete") {
      this.isRequest = true;
    } else {
      this.isRequest = false;
    }
    console.log("event : ", event);
  }

  get arithmeticCode() {
    return this.formGroup2.get("code");
  }

  get arithmeticOperation() {
    return this.formGroup2.get("operation");
  }

  get arithmeticCode2() {
    return this.formGroup2.get("code2");
  }

  get secondArithmeticCode() {
    return this.formGroup2.get("secondArithmetic.code");
  }

  get secondArithmeticOperation() {
    return this.formGroup2.get("secondArithmetic.operation");
  }

  get secondArithmeticCode2() {
    return this.formGroup2.get("secondArithmetic.code2");
  }

  myCallbackFunction1_1 = (args: any): void => {
    this.selectedArithmetic1_1 = args;
  };

  myCallbackFunctionOperation_1 = (args: any): void => {
    this.selectedArithmeticOperation1 = args;
  };

  myCallbackFunction1_2 = (args: any): void => {
    this.selectedArithmetic1_2 = args;
  };

  myCallbackFunctionMiddleOperation = (args: any): void => {
    this.selectedArithmetic2_2 = args;
  };

  myCallbackFunction2_1 = (args: any): void => {
    this.selectedArithmetic2_1 = args;
  };

  myCallbackFunctionOperation_2 = (args: any): void => {
    this.selectedArithmeticOperation2 = args;
  };

  myCallbackFunction2_2 = (args: any): void => {
    this.selectedArithmetic2_2 = args;
  };
}
