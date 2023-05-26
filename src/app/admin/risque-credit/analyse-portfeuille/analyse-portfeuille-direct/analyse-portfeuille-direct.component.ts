import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AllSelected } from "src/app/Models/AllSelected";
import { CreditRisqueRapport } from "src/app/Models/CreditRisqueRapport";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import { MatDatepicker } from "@angular/material/datepicker";
import * as _moment from "moment";
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from "moment";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { REportD } from "src/app/Models/REportD";

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: "YYYY",
  },
  display: {
    dateInput: "YYYY",
    monthYearLabel: "YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "YYYY",
  },
};

interface Unite {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-analyse-portfeuille-direct",
  templateUrl: "./analyse-portfeuille-direct.component.html",
  styleUrls: ["./analyse-portfeuille-direct.component.css"],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class AnalysePortfeuilleDirectComponent implements OnInit {
  lastYear!: number;
  years = new Date().getFullYear() - 1;
  errormessage!: string;
  visible: boolean = false;
  checked: Boolean = false;
  slectedPeriods: AllSelected[] = [];
  availablePeriods: AllSelected[] = [];
  filterAvailablePeriods: AllSelected[] = [];
  dateTransforme!: any;
  creditReportFix: any = {};
  creditReportTotal: any[] = [];
  creditReportAnalysePortfeuille: any = {};
  CreditRisqueRapportTotal!: CreditRisqueRapport;
  dateChecked: any[] = [];
  selectedYear!: string;
  selectedUnit!: string;
  formule: string = "empty";
  dateNow: Date = new Date();
  headers: string[] = [
    "Crédit Particulier",
    "Crédit Entreprise",
    "Total ",
    "Variation",
  ];

  loading = false;

  propertyRaport: any = [
    "creditTotaldirect",
    "creanceDouteuse",
    "creanceCourant",
    "creanceDouteuseNets",
    "creditDirectNetInteretReserve",
    "provisions",
    "tauxCreanceDouteuse",
    "tauxOuverture",
    "interetreservesCreancesDouteuse",
  ];

  creditType: any = ["entrepriseKey", "retailKey", "totalKey"];
  creditTypePeriode: any = [
    "periodeEntrperise",
    "periodeRetails",
    "periodeTotal",
  ];
  checkSelectPeriode: boolean = false;
  public dateYear!: FormGroup;
  reportD!: REportD;

  uniteControl = new FormControl<Unite | null>(null, Validators.required);
  selectFormControl = new FormControl("", Validators.required);
  unites: Unite[] = [
    { value: "D", viewValue: "Dinars" },
    { value: "ML", viewValue: "Milliard de dinars" },
  ];
  divUnit: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private servicesRepo: AnalysePortfeuilleServicesService
  ) {}

  ngOnInit(): void {
    this.creditReportFix.creditParticulier = {};
    this.creditReportFix.creditEntreprise = {};
    this.creditReportFix.datereportfix = {};
    this.creditReportFix.totalFix = {};
    this.handelGetCreditPeriodFixe();

    this.dateYear = this.formBuilder.group({
      years: new FormControl("", [Validators.required]),
    });
    if (this.selectedYear === undefined) {
      this.selectedYear = String(this.years + 1);
    }
    this.servicesRepo.selectedUnit = "ML";
    //Portefeuille direct
    this.servicesRepo.currentAnalyseType = 1;
  }

  // filte by year and get report fix
  addEvent(type: string, event: any) {
    var datePipe = new DatePipe("en-US");
    this.selectedYear = datePipe.transform(event._d, "yyyy");
    this.lastYear = parseInt(this.selectedYear) - 1;
    //get all date filterby year
    this.handelGetAllReportDate();
    this.handelGetCreditPeriodFixe();
  }

  selectUnit(event: Event) {
    this.selectedUnit = (event.target as HTMLSelectElement).value;
    this.servicesRepo.selectedUnit = this.selectedUnit;
  }

  handelGetAllReportDate() {
    var datePipe = new DatePipe("en-US");
    console.log("this .selecyt yar ", this.selectedYear);
    this.availablePeriods = [];
    this.servicesRepo.getDateReporting(this.selectedYear).subscribe({
      next: (dataPeriods) => {
        for (let i = 0; i < dataPeriods.length; i++) {
          const a1 = {} as AllSelected;
          a1.datereporte = dataPeriods[i]["yearReport"];
          a1.checked = false;
          a1.id = i;

          this.dateTransforme = datePipe.transform(
            a1.datereporte,
            "yyyy-MM-dd"
          );

          this.servicesRepo
            .getCreditParticulierParPeriode(this.dateTransforme)
            .subscribe({
              next: (response) => {
                response.creanceCourant =
                  response.creanceCourant / this.divUnit;
                response.creanceDouteuse =
                  response.creanceDouteuse / this.divUnit;
                response.creanceDouteuseNets =
                  response.creanceDouteuseNets / this.divUnit;
                response.creditDirectNetInteretReserve =
                  response.creditDirectNetInteretReserve / this.divUnit;
                response.creditTotaldirect =
                  response.creditTotaldirect / this.divUnit;
                response.interetReserve =
                  response.interetReserve / this.divUnit;
                response.interetreservesCreancesDouteuse =
                  response.interetreservesCreancesDouteuse / this.divUnit;
                response.provisions = response.provisions / this.divUnit;
                a1.creditParticulier = response;
              },
              error: (err) => {
                this.errormessage = err.error.message;
              },
            });
          this.servicesRepo
            .getCreditEntreParPeriode(this.dateTransforme)
            .subscribe({
              next: (response) => {
                response.creanceCourant =
                  response.creanceCourant / this.divUnit;
                response.creanceDouteuse =
                  response.creanceDouteuse / this.divUnit;
                response.creanceDouteuseNets =
                  response.creanceDouteuseNets / this.divUnit;
                response.creditDirectNetInteretReserve =
                  response.creditDirectNetInteretReserve / this.divUnit;
                response.creditTotaldirect =
                  response.creditTotaldirect / this.divUnit;
                response.interetReserve =
                  response.interetReserve / this.divUnit;
                response.interetreservesCreancesDouteuse =
                  response.interetreservesCreancesDouteuse / this.divUnit;
                response.provisions = response.provisions / this.divUnit;
                a1.creditEntreprise = response;
              },
              error: (err) => {
                this.errormessage = err.error.message;
              },
            });
          if (this.availablePeriods.includes(a1)) {
            console.log("existe");
          }
          this.availablePeriods.push(a1);
        }
        console.log("available periods : ", this.availablePeriods);
      },
      error: (err) => {
        this.errormessage = err;
      },
      complete: () => {
        console.log("dhaguiii ", this.availablePeriods);
        this.filterAvailablePeriods = this.availablePeriods.filter((p) => {
          return p.datereporte.substring(0, 4) == this.selectedYear;
        });
      },
    });
  }

  showCheckboxes() {
    this.visible = !this.visible;
  }
  protected hasDate(date: any) {
    return this.slectedPeriods.includes(date);
  }

  stateChanged(event: any, selctPeriodElt: AllSelected) {
    selctPeriodElt.checked = event.target.checked;
    if (event.target.checked) {
      if (this.hasDate(selctPeriodElt.datereporte)) {
        return;
      }
      this.slectedPeriods.push(selctPeriodElt);

      var resultTotal = this.getTotalForPeriod(
        selctPeriodElt.creditParticulier,
        selctPeriodElt.creditEntreprise,
        {},
        this.getSomme
      );

      this.slectedPeriods.sort((a, b) => a.id - b.id);

      resultTotal.index = this.slectedPeriods.indexOf(selctPeriodElt);
      this.creditReportTotal.push(resultTotal);

      this.creditReportTotal.sort((a, b) => a.index - b.index);
      var lastElement =
        this.creditReportTotal[this.creditReportTotal.length - 1];

      var resultVariation = this.getTotalForPeriod(
        lastElement,
        this.creditReportFix.totalFix,
        {},
        this.getvariationmontant
      );
      console.log("result ", resultVariation);
      this.creditReportAnalysePortfeuille.variationMontant = resultVariation;
      var resultPourcentage = this.getTotalForPeriod(
        resultVariation,
        this.creditReportFix.totalFix,
        {},
        this.getPourcentage
      );
      this.creditReportAnalysePortfeuille.resultPourcentage = resultPourcentage;
    } else {
      var index = this.slectedPeriods.indexOf(selctPeriodElt);
      this.slectedPeriods.splice(index, 1);
      this.creditReportTotal.splice(index, 1);
    }

    this.creditReportAnalysePortfeuille.creditReportTotal = {};
    this.creditReportAnalysePortfeuille.creditReportTotal =
      this.creditReportTotal;
    this.creditReportAnalysePortfeuille.slectedPeriods = this.slectedPeriods;

    if (this.creditReportAnalysePortfeuille.creditReportTotal.length === 0) {
      this.creditReportAnalysePortfeuille.creditPourcentage = [];
      this.creditReportAnalysePortfeuille.creditVariation = [];
    }
  }
  myclass = "progress";
  click() {
    this.myclass = "progress";
  }

  handelGetCreditPeriodFixe() {
    console.log("unit : " + this.selectedUnit);
    if (this.selectedUnit === "D") this.divUnit = 1;
    else this.divUnit = 1000000000;
    this.creditReportFix.datereportfix = {};
    if (this.lastYear === undefined) {
      this.creditReportFix.datereportfix = this.years + "-12-31";
      this.servicesRepo
        .getCreditParticulierParPeriode(this.years + "-12-31")
        .subscribe((response) => {
          response.creanceCourant = 0;
          this.creditReportFix.creditParticulier = response;
          this.servicesRepo
            .getCreditEntreParPeriode(this.lastYear + "-12-31")
            .subscribe((response) => {
              response.creanceCourant = 0;
              this.creditReportFix.creditEntreprise = response;
              this.creditReportFix.totalFix = {};
              this.getTotalForPeriod(
                this.creditReportFix.creditParticulier,
                this.creditReportFix.creditEntreprise,
                this.creditReportFix.totalFix,
                this.getSomme
              );

              this.creditReportAnalysePortfeuille.creditReportFix =
                this.creditReportFix;
              this.servicesRepo.creditReportFix = this.creditReportFix;
            });
        });
    } else {
      this.creditReportFix.datereportfix = this.lastYear + "-12-31";
      this.servicesRepo
        .getCreditParticulierParPeriode(this.lastYear + "-12-31")
        .subscribe((response) => {
          response.creanceCourant = response.creanceCourant / this.divUnit;
          response.creanceDouteuse = response.creanceDouteuse / this.divUnit;
          response.creanceDouteuseNets =
            response.creanceDouteuseNets / this.divUnit;
          response.creditDirectNetInteretReserve =
            response.creditDirectNetInteretReserve / this.divUnit;
          response.creditTotaldirect =
            response.creditTotaldirect / this.divUnit;
          response.interetReserve = response.interetReserve / this.divUnit;
          response.interetreservesCreancesDouteuse =
            response.interetreservesCreancesDouteuse / this.divUnit;
          response.provisions = response.provisions / this.divUnit;
          response.tauxCreanceDouteuse =
            response.tauxCreanceDouteuse / this.divUnit;
          response.tauxOuverture = response.tauxOuverture / this.divUnit;
          this.creditReportFix.creditParticulier = response;
          this.servicesRepo
            .getCreditEntreParPeriode(this.lastYear + "-12-31")
            .subscribe((response) => {
              response.creanceCourant = response.creanceCourant / this.divUnit;
              response.creanceDouteuse =
                response.creanceDouteuse / this.divUnit;
              response.creanceDouteuseNets =
                response.creanceDouteuseNets / this.divUnit;
              response.creditDirectNetInteretReserve =
                response.creditDirectNetInteretReserve / this.divUnit;
              response.creditTotaldirect =
                response.creditTotaldirect / this.divUnit;
              response.interetReserve = response.interetReserve / this.divUnit;
              response.interetreservesCreancesDouteuse =
                response.interetreservesCreancesDouteuse / this.divUnit;
              response.provisions = response.provisions / this.divUnit;
              response.tauxCreanceDouteuse =
                response.tauxCreanceDouteuse / this.divUnit;
              response.tauxOuverture = response.tauxOuverture / this.divUnit;
              this.creditReportFix.creditEntreprise = response;
              this.creditReportFix.totalFix = {};

              this.getTotalForPeriod(
                this.creditReportFix.creditParticulier,
                this.creditReportFix.creditEntreprise,
                this.creditReportFix.totalFix,
                this.getSomme
              );

              this.creditReportAnalysePortfeuille.creditReportFix =
                this.creditReportFix;
              this.servicesRepo.creditReportFix = this.creditReportFix;
            });
        });
    }
    console.log("prtf ", this.creditReportAnalysePortfeuille);
  }

  getTotalForPeriod(arg1: any, arg2: any, result: any, operation: any) {
    result.creditTotaldirect = operation(
      arg1.creditTotaldirect,
      arg2.creditTotaldirect
    );
    result.creanceDouteuse = operation(
      arg1.creanceDouteuse,
      arg2.creanceDouteuse
    );
    result.creanceCourant = operation(arg1.creanceCourant, arg2.creanceCourant);
    result.interetReserve = operation(arg1.interetReserve, arg2.interetReserve);
    result.provisions = operation(arg1.provisions, arg2.provisions);
    result.tauxCreanceDouteuse = operation(
      arg1.tauxCreanceDouteuse,
      arg2.tauxCreanceDouteuse
    );
    result.tauxOuverture = operation(arg1.tauxOuverture, arg2.tauxOuverture);
    result.interetreservesCreancesDouteuse = operation(
      arg1.interetreservesCreancesDouteuse,
      arg2.interetreservesCreancesDouteuse
    );
    result.creanceDouteuseNets = operation(
      arg1.creanceDouteuseNets,
      arg2.creanceDouteuseNets
    );
    result.creditDirectNetInteretReserve = operation(
      arg1.creditDirectNetInteretReserve,
      arg2.creditDirectNetInteretReserve
    );
    return result;
  }

  // genrerRapportAnalysePortefeuilleDirect() {
  //   this.servicesRepo.uploadReport(this.pdf).subscribe((res) => {
  //     console.log("res", res);
  //     var file = new Blob([res], { type: "application/pdf" });
  //     var fileURL = URL.createObjectURL(file);
  //     window.open(fileURL);
  //   });
  //   console.log(
  //     "this.creditReportAnalysePortfeuille",
  //     this.creditReportAnalysePortfeuille
  //   );
  // }

  genrerRapportAnalysePortefeuilleDirect() {
    console.log("portfeille<< ", this.creditReportAnalysePortfeuille);
    this.checkSelectPeriode =
      this.creditReportAnalysePortfeuille.slectedPeriods !== undefined
        ? true
        : false;
    var jsonG = this.creditReportAnalysePortfeuille;
    var keyColumn = this.getKeyColumn(jsonG.slectedPeriods, this.creditType);
    var periodesNames = this.getPeriodes(
      jsonG.slectedPeriods,
      this.creditTypePeriode,
      jsonG.creditReportFix
    );
    var entreprise = this.generateDataSource(
      jsonG.slectedPeriods,
      "creditEntreprise",
      jsonG.creditReportFix
    );
    var retails = this.generateDataSource(
      jsonG.slectedPeriods,
      "creditParticulier",
      jsonG.creditReportFix
    );
    //create new array with format selectPeriods include total
    var creditReportAnalysePortfeuilleModified = [];
    var reportTotal: [] = this.creditReportAnalysePortfeuille.creditReportTotal;
    if (this.checkSelectPeriode) {
      this.creditReportAnalysePortfeuille.slectedPeriods.forEach(
        (period, index) => {
          var newPeriod = { ...period, total: reportTotal[index] };

          creditReportAnalysePortfeuilleModified.push(newPeriod);
        }
      );
    }
    var jsonmodified = this.creditReportAnalysePortfeuille.creditReportFix;
    jsonmodified["total"] =
      this.creditReportAnalysePortfeuille.creditReportFix.totalFix;
    var total = this.generateDataSource(
      creditReportAnalysePortfeuilleModified,
      "total",
      jsonmodified
    );
    var dataSource = this.generateGlobalDS(
      ["entreprise", "retail", "totals"],
      entreprise,
      retails,
      total
    );

    var globalObject = {};
    globalObject["keyColumns"] = keyColumn;
    globalObject["periode"] = periodesNames;
    globalObject["data"] = dataSource;
    console.log("globalObject", globalObject);

    this.servicesRepo.uploadReport(globalObject).subscribe((res) => {
      console.log("res", res);
      var file = new Blob([res], { type: "application/pdf" });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }

  //retrive ColumnNames
  getKeyColumn(json, keyObtions) {
    var keyArray = ["propertyCol", "periodefix"];
    if (this.checkSelectPeriode) {
      json.forEach((element, index) => {
        keyArray.push("periode" + index);
      });
    }
    var objectKeys = {};
    keyObtions.forEach((element) => {
      objectKeys[element] = keyArray;
    });
    return objectKeys;
  }

  //retrivePeriode
  getPeriodes(json, periodeOptions, jsonFix) {
    var periodes = ["Portefeuille des crédits direct (en milliards de DZD)"];

    periodes.push(jsonFix.dateReportFix);
    if (this.checkSelectPeriode) {
      json.forEach((element) => {
        periodes.push(
          new Date(element.datereporte).toJSON().slice(0, 10).replace(/-/g, "-")
        );
      });
    }
    var objectperiodes = {};
    periodeOptions.forEach((element) => {
      objectperiodes[element] = periodes;
    });
    return objectperiodes;
  }

  //getFix columns
  getFixColumnNames() {
    var table = [
      { propertyCol: "Total Crédits Directs" },
      { propertyCol: "Créances douteuses" },
      { propertyCol: "Créances courantes" },
      { propertyCol: "Créances douteuses net d'intérêts réservés" },
      { propertyCol: "Crédit Direct Net d'intérêts réservés" },
      { propertyCol: "Provisions" },
      { propertyCol: "Taux de créances douteuses" },
      { propertyCol: "Taux de couverture" },
      { propertyCol: "Intérêts réservés des créances douteuses " },
    ];
    return table;
  }

  //generate data source

  generateDataSource(selectPeriod, type, creditFix) {
    var object1 = this.getFixColumnNames();
    this.propertyRaport.forEach((element, index) => {
      if (creditFix[type][element] === null) {
        object1[index]["periodefix"] = "";
      } else {
        object1[index]["periodefix"] = creditFix[type][element].toString();
      }
    });
    if (this.checkSelectPeriode) {
      selectPeriod.forEach((element, index) => {
        this.propertyRaport.forEach((element1, index1) => {
          object1[index1]["periode" + index] =
            element[type][element1].toString();
        });
      });
    }
    return object1;
  }

  //generate Global Data source
  generateGlobalDS(arg, ...args) {
    var table = [];
    args[0].forEach((element, index) => {
      var object1 = {};
      arg.forEach((element1, index1) => {
        object1[element1] = args[index1][index];
        console.log(args);
      });
      table.push(object1);
    });
    return table;
  }

  getSomme(params: any, arg: any) {
    var reslt = params + arg;
    return reslt;
  }
  getvariationmontant(params: any, arg: any) {
    var reslt = params - arg;
    return reslt;
  }
  getPourcentage(args1: any, args2: any) {
    var reslt = (100 * args1) / args2;
    return reslt;
  }

  graphePortefeuilDirect() {
    this.route.navigateByUrl(
      "Admin/AnalysePortfeuille/GraphePortfeuilledirect"
    );
  }

  commentaireAnalyse() {
    this.route.navigateByUrl("Admin/AnalysePortfeuille/CommentaireAnalyse");
  }

  importerFichierExcel() {
    this.loading = true;
    this.servicesRepo.importerFichierExcel().subscribe({
      next: (res) => {
        console.log(res);
        alert("Importation du fichier excel terminée !");
      },
    });
    this.loading = false;
  }

  changeFormule(event) {
    let formule = event.target.value;
    this.formule = formule;
  }
  events: string[] = [];

  date = new FormControl(moment());

  setMonthAndYear(
    normalizedMonthAndYear: Moment,
    datepicker: MatDatepicker<Moment>
  ) {
    const ctrlValue = this.date.value;

    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);

    datepicker.close();
  }
}
