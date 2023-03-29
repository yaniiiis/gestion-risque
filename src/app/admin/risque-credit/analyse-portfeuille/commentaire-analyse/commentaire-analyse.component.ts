import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
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
import { REportD } from "src/app/Models/REportD";
import { MatDialog } from "@angular/material/dialog";
import { DialogueMotifComponent } from "./dialogue-motif/dialogue-motif.component";
import { Commentaire, CommentaireService } from "src/app/_services/CommentaireService/commentaire-service";
import { StorageSService } from "src/app/_services/storageService/storage-s.service";
import { Observable } from "rxjs";
import { IndicateurService } from "src/app/_services/indicateur.service";

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
  selector: "app-commentaire-analyse",
  templateUrl: "./commentaire-analyse.component.html",
  styleUrls: ["./commentaire-analyse.component.css"],
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
export class CommentaireAnalyseComponent implements OnInit {
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
  commentaireSubordonne: Observable<Commentaire>;
  commentaireSub: string;
  idCommentaireSub: number;

  commentaireSubAccepte: boolean = false;
  commentaireSubRejete: boolean = false;



  disabledGenerateReport : boolean = true;
  divUnit: number = 1;
  headers: string[] = [
    "Credit Particulier",
    "Credit Entreprise",
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

  //selctPeriodElt: AllSelected;

  selctPeriodElt = {
    id: 0,
    checked: true,
    datereporte: "2021-03-31",
    creditParticulier: {} as CreditRisqueRapport,
    creditEntreprise: {} as CreditRisqueRapport,
  } as AllSelected;


  unites: Unite[] = [
    { value: "D", viewValue: "Dinars" },
    { value: "ML", viewValue: "Milliard de dinars" },
  ];

  motif: string;
  title: string = "Confirmation";

  showAccept = true;
 
  l_total_credit_direct = 0;
  l_creances_douteuses = 0;
  l_creances_courantes = 0;
  l_interets_reserves = 0;
  l_provisions = 0;
  l_taux_creances_douteuses = 0;
  l_taux_de_couverture = 0;
  l_interets_reserves_creances_douteuses = 0;
  l_creances_douteuses_net_interets_reserves = 0;
  l_credit_direct_net_interet_reserves = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private servicesRepo: AnalysePortfeuilleServicesService,
    public dialog: MatDialog,
    private commentaireService: CommentaireService,
    private storageSer: StorageSService,
    private indicateurService: IndicateurService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogueMotifComponent, {
      data: { motif: this.motif, title: this.title },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.motif = result;
    });
  }

  ngOnInit(): void {
    moment.locale('us');
    var today = moment().format("DD-MM-YYYYTHH:mm:SS[Z]")
    var year = moment().year();
    var month = moment().month() + 1;
    if (this.storageSer.getUser().roles.id === 4)
    this.showAccept = false;

    this.commentaireSubordonne = this.commentaireService.findCommentaireSubordonneByDateAndTypeAnalyse(this.servicesRepo.currentAnalyseType, this.storageSer.getUser().roles.id, year, month);
    
   this.commentaireSubordonne.subscribe({
      next: (data) => {
        if(data!=null){
        this.commentaireSub = data.commentaire
        this.idCommentaireSub = data.id
        this.commentaireSubAccepte = (data.acceptedOn==undefined && data.rejectedOn==undefined)?false:true;
        this.commentaireSubRejete = (data.rejectedOn==undefined && data.acceptedOn==undefined)?false:true;
        }
           },
       error: (error) =>{
        console.log(error.error.text)
       }    
      });
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

   

    this.slectedPeriods = [];

   
    this.handelGetAllReportDate(this.selctPeriodElt)
   // this.stateChanged();
  
   if (this.storageSer.userHasGenererRapport())
   this.disabledGenerateReport = false;
   
   this.indicateurService.getIndicateurById(1).subscribe((response) =>{
       this.l_total_credit_direct = response.valeurLimite;
   });

   this.indicateurService.getIndicateurById(2).subscribe((response) =>{
    this.l_creances_douteuses = response.valeurLimite;
   });

   this.indicateurService.getIndicateurById(3).subscribe((response) =>{
    this.l_creances_courantes = response.valeurLimite;;
   });

   this.indicateurService.getIndicateurById(4).subscribe((response) =>{
    this.l_interets_reserves = response.valeurLimite;;
   });

   this.indicateurService.getIndicateurById(5).subscribe((response) =>{
    this.l_provisions = response.valeurLimite;;
   });

   this.indicateurService.getIndicateurById(6).subscribe((response) =>{
    this.l_taux_creances_douteuses = response.valeurLimite;;
   });

   this.indicateurService.getIndicateurById(7).subscribe((response) =>{
    this.l_taux_de_couverture = response.valeurLimite;;
   });

   this.indicateurService.getIndicateurById(8).subscribe((response) =>{
    this.l_interets_reserves_creances_douteuses = response.valeurLimite;;
   });

   this.indicateurService.getIndicateurById(9).subscribe((response) =>{
    this.l_creances_douteuses_net_interets_reserves = response.valeurLimite;;
   });

   this.indicateurService.getIndicateurById(10).subscribe((response) =>{
    this.l_credit_direct_net_interet_reserves = response.valeurLimite;;
   });
  
  }

  // filte by year and get report fix
  addEvent(type: string, event: any) {
    var datePipe = new DatePipe("en-US");
    this.selectedYear = datePipe.transform(event._d, "yyyy");
    this.lastYear = parseInt(this.selectedYear) - 1;

    //get all date filterby year
    this.handelGetCreditPeriodFixe();
  }

   a1 = {} as AllSelected;
   
  handelGetAllReportDate(selctPeriodElt: AllSelected) {
    var datePipe = new DatePipe("en-US");
    console.log("this .select year ", this.selectedYear);
    this.availablePeriods = [];

    
    this.dateTransforme = datePipe.transform(
            selctPeriodElt.datereporte,
            "yyyy-MM-dd"
          );

          this.dateTransforme = "2021-03-31";
          this.years = 2020;

          this.creditReportFix.datereportfix = this.years + "-12-31";
          this.servicesRepo
            .getCreditParticulierParPeriode(this.years + "-12-31")
            .subscribe((response) => {
              response.creanceCourant = response.creanceCourant / this.divUnit;
              response.creanceDouteuse = response.creanceDouteuse / this.divUnit;
              response.creanceDouteuseNets = response.creanceDouteuseNets/ this.divUnit;
              response.creditDirectNetInteretReserve = response.creditDirectNetInteretReserve / this.divUnit;
              response.creditTotaldirect = response.creditTotaldirect / this.divUnit;
              response.interetReserve = response.interetReserve / this.divUnit;
              response.interetreservesCreancesDouteuse = response.interetreservesCreancesDouteuse / this.divUnit;
              response.provisions = response.provisions / this.divUnit;
              this.creditReportFix.creditParticulier = response;
              this.servicesRepo
                .getCreditEntreParPeriode(this.lastYear + "-12-31")
                .subscribe((response) => {
                  response.creanceCourant = response.creanceCourant / this.divUnit;
                  response.creanceDouteuse = response.creanceDouteuse / this.divUnit;
                  response.creanceDouteuseNets = response.creanceDouteuseNets/ this.divUnit;
                  response.creditDirectNetInteretReserve = response.creditDirectNetInteretReserve / this.divUnit;
                  response.creditTotaldirect = response.creditTotaldirect / this.divUnit;
                  response.interetReserve = response.interetReserve / this.divUnit;
                  response.interetreservesCreancesDouteuse = response.interetreservesCreancesDouteuse / this.divUnit;
                  response.provisions = response.provisions / this.divUnit;
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
                  this.servicesRepo.creditReportFix =   this.creditReportFix;  


                 this.servicesRepo
            .getCreditParticulierParPeriode(this.dateTransforme)
            .subscribe({
              next: (response) => {
                console.log("dans getCreditParticulierParPeriode" + response.creanceCourant)
                response.creanceCourant = response.creanceCourant / this.divUnit;
                response.creanceDouteuse = response.creanceDouteuse / this.divUnit;
                response.creanceDouteuseNets = response.creanceDouteuseNets/ this.divUnit;
                response.creditDirectNetInteretReserve = response.creditDirectNetInteretReserve / this.divUnit;
                response.creditTotaldirect = response.creditTotaldirect / this.divUnit;
                response.interetReserve = response.interetReserve / this.divUnit;
                response.interetreservesCreancesDouteuse = response.interetreservesCreancesDouteuse / this.divUnit;
                response.provisions = response.provisions / this.divUnit;
                selctPeriodElt.creditParticulier = response;

                console.log("selctPeriodElt.creditParticulier.creanceCourant : " + selctPeriodElt.creditParticulier.creanceCourant)

                this.servicesRepo
                .getCreditEntreParPeriode(this.dateTransforme)
                .subscribe({
                  next: (response) => {
                    response.creanceCourant = response.creanceCourant / this.divUnit;
                    response.creanceDouteuse = response.creanceDouteuse / this.divUnit;
                    response.creanceDouteuseNets = response.creanceDouteuseNets/ this.divUnit;
                    response.creditDirectNetInteretReserve = response.creditDirectNetInteretReserve / this.divUnit;
                    response.creditTotaldirect = response.creditTotaldirect / this.divUnit;
                    response.interetReserve = response.interetReserve / this.divUnit;
                    response.interetreservesCreancesDouteuse = response.interetreservesCreancesDouteuse / this.divUnit;
                    response.provisions = response.provisions / this.divUnit;
                    selctPeriodElt.creditEntreprise = response;
                    let resultTotal = this.getTotalForPeriod(
                      selctPeriodElt.creditParticulier,
                      selctPeriodElt.creditEntreprise,
                      {},
                      this.getSomme
                    );  
                  
                    var resultVariation = this.getTotalForPeriod(
                      resultTotal,
                      this.creditReportAnalysePortfeuille.creditReportFix.totalFix,
                      {},
                      this.getvariationmontant
                    );
                    this.creditReportAnalysePortfeuille.variationMontant = resultVariation;
                    var resultPourcentage = this.getTotalForPeriod(
                      resultVariation,
                      this.creditReportAnalysePortfeuille.creditReportFix.totalFix,
                      {},
                      this.getPourcentage
                    );
              
                 
                  this.creditReportTotal.push(resultTotal);         
                       
                  this.creditReportAnalysePortfeuille.resultPourcentage = resultPourcentage;
                  this.creditReportAnalysePortfeuille.creditReportTotal = {};
                  this.creditReportAnalysePortfeuille.creditReportTotal = this.creditReportTotal;
                  this.creditReportAnalysePortfeuille.slectedPeriods = this.slectedPeriods;
              
                  if (this.creditReportAnalysePortfeuille.creditReportTotal.length === 0) {
                    this.creditReportAnalysePortfeuille.creditPourcentage = [];
                    this.creditReportAnalysePortfeuille.creditVariation = [];
                  }

                  if (this.slectedPeriods.includes(selctPeriodElt)) {
                    console.log("existe");
                  }
                  
                  //this.availablePeriods.push(selctPeriodElt);
                  this.slectedPeriods.push(selctPeriodElt);
                selctPeriodElt.id = 0;
                selctPeriodElt.checked = true               
                  },
                  error: (err) => {
                    this.errormessage = err.error.message;
                  },
                });
              },
              error: (err) => {
                this.errormessage = err.error.message;
              },
            });
                });
            });         
  }


  showCheckboxes() {
    this.visible = !this.visible;
  }
  protected hasDate(date: any) {
    return this.slectedPeriods.includes(date);
  }

  handelGetCreditPeriodFixe() {
    this.creditReportFix.datereportfix = {};
    this.lastYear = parseInt("2021") - 1;
    console.log('service selected unit : '+this.servicesRepo.selectedUnit)
    if (this.servicesRepo.selectedUnit==="D"){
    this.divUnit = 1;}
    else {this.divUnit = 1000000000;}

    if (this.lastYear === undefined) {
      this.creditReportFix.datereportfix = this.years + "-12-31";
      this.servicesRepo
        .getCreditParticulierParPeriode(this.years + "-12-31")
        .subscribe((response) => {
          response.creanceCourant = response.creanceCourant / this.divUnit;
          response.creanceDouteuse = response.creanceDouteuse / this.divUnit;
          response.creanceDouteuseNets = response.creanceDouteuseNets/ this.divUnit;
          response.creditDirectNetInteretReserve = response.creditDirectNetInteretReserve / this.divUnit;
          response.creditTotaldirect = response.creditTotaldirect / this.divUnit;
          response.interetReserve = response.interetReserve / this.divUnit;
          response.interetreservesCreancesDouteuse = response.interetreservesCreancesDouteuse / this.divUnit;
          response.provisions = response.provisions / this.divUnit;
          this.creditReportFix.creditParticulier = response;
          this.servicesRepo
            .getCreditEntreParPeriode(this.lastYear + "-12-31")
            .subscribe((response) => {
              response.creanceCourant = response.creanceCourant / this.divUnit;
              response.creanceDouteuse = response.creanceDouteuse / this.divUnit;
              response.creanceDouteuseNets = response.creanceDouteuseNets/ this.divUnit;
              response.creditDirectNetInteretReserve = response.creditDirectNetInteretReserve / this.divUnit;
              response.creditTotaldirect = response.creditTotaldirect / this.divUnit;
              response.interetReserve = response.interetReserve / this.divUnit;
              response.interetreservesCreancesDouteuse = response.interetreservesCreancesDouteuse / this.divUnit;
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
           //  console.log('dans handle fix '+ this.creditReportAnalysePortfeuille.creditReportFix.totalFix.creditTotaldirect)   
             this.servicesRepo.creditReportFix =   this.creditReportFix;  

            });
        });
    } else {
      this.creditReportFix.datereportfix = this.lastYear + "-12-31";
      this.servicesRepo
        .getCreditParticulierParPeriode(this.lastYear + "-12-31")
        .subscribe((response) => {
          response.creanceCourant = response.creanceCourant / this.divUnit;
          response.creanceDouteuse = response.creanceDouteuse / this.divUnit;
          response.creanceDouteuseNets = response.creanceDouteuseNets/ this.divUnit;
          response.creditDirectNetInteretReserve = response.creditDirectNetInteretReserve / this.divUnit;
          response.creditTotaldirect = response.creditTotaldirect / this.divUnit;
          response.interetReserve = response.interetReserve / this.divUnit;
          response.interetreservesCreancesDouteuse = response.interetreservesCreancesDouteuse / this.divUnit;
          this.creditReportFix.creditParticulier = response;
          this.servicesRepo
            .getCreditEntreParPeriode(this.lastYear + "-12-31")
            .subscribe((response) => {
              response.creanceCourant = response.creanceCourant / this.divUnit;
          response.creanceDouteuse = response.creanceDouteuse / this.divUnit;
          response.creanceDouteuseNets = response.creanceDouteuseNets/ this.divUnit;
          response.creditDirectNetInteretReserve = response.creditDirectNetInteretReserve / this.divUnit;
          response.creditTotaldirect = response.creditTotaldirect / this.divUnit;
          response.interetReserve = response.interetReserve / this.divUnit;
          response.interetreservesCreancesDouteuse = response.interetreservesCreancesDouteuse / this.divUnit;
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
                this.servicesRepo.creditReportFix =   this.creditReportFix;
               // console.log('dans handle fix '+this.creditReportAnalysePortfeuille.creditReportFix.totalFix.creditTotaldirect)  
                  
            });
        });
    }
  //  console.log("prtf ", this.creditReportAnalysePortfeuille);
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

 
  
 accepter(){
  moment.locale('fr');
  var today = moment().format("DD-MM-YYYYTHH:mm:SS[Z]")
  var year = moment().year();
  var month = moment().month() + 1;
  
  this.commentaireService.accepter(this.idCommentaireSub).subscribe({
    next: () => {
    //  this.commentaireService.updateCommentaireSub(commentaire) 
    this.commentaireSubordonne = this.commentaireService.findCommentaireSubordonneByDateAndTypeAnalyse(this.servicesRepo.currentAnalyseType, this.storageSer.getUser().roles.id, year, month);
    
    this.commentaireSubordonne.subscribe({
       next: (data) => {
         if(data!=null){
         this.commentaireSub = data.commentaire
         this.idCommentaireSub = data.id
         this.commentaireSubAccepte = (data.acceptedOn==undefined && data.rejectedOn==undefined)?false:true;
         this.commentaireSubRejete = (data.rejectedOn==undefined && data.acceptedOn==undefined)?false:true;
         }
            },
        error: (error) =>{
         console.log(error.error.text)
        }    
       });
      alert("Commentaire Accepté ! ");
              },
    error: (error) => {
       console.log(error);    
    },
  });
 }

 generateReport(){
  alert('Generation Rapport finale')
 }
}
