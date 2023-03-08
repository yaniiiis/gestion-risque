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
import { REportD } from "src/app/Models/REportD";
import { MatDialog } from "@angular/material/dialog";
import { DialogueMotifComponent } from "../commentaire-analyse/dialogue-motif/dialogue-motif.component";
import { Commentaire, CommentaireService } from "src/app/_services/CommentaireService/commentaire-service";
import { StorageSService } from "src/app/_services/storageService/storage-s.service";
import { Observable } from "rxjs";
import { portefeuillIndirectRapport } from "src/app/Models/portefeuillIndirectRapport";
import { rapportIndirect } from "src/app/Models/rapportIndirect";
import { PortfeuilleIndirectservicesService } from "src/app/_services/analysePrtfeuille/PortefeuilleIndirect/portfeuille-indirectservices.service";

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
  selector: "app-commentaire-analyse-pf-indirect",
  templateUrl: "./commentaire-analyse-pf-indirect.component.html",
  styleUrls: ["./commentaire-analyse-pf-indirect.component.css"],
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
export class CommentaireAnalysePfIndirectComponent implements OnInit {
 
 
  errormessage!: string;
 
  checked: Boolean = false;
  slectedPeriods: AllSelected[] = [];
  availablePeriods: AllSelected[] = [];
 
  // dateTransforme!: any;
  // creditReportFix: any = {};
  // creditReportTotal: any[] = [];
  // creditReportAnalysePortfeuille: any = {};
  // CreditRisqueRapportTotal!: CreditRisqueRapport;
  // dateChecked: any[] = [];
  
  selectedUnit!: string;
 

//-----------------------------------------------------------------
lastYear!: number;
  years: number = new Date().getFullYear() - 1;
  header: string[] = [
    "Enagagement HB",
    "Dépots de granties pour engagement hb",
    "Engagement Net",
    "Variation",
  ];
  visible: boolean = false;
  PeriodeDyna: any[] = [];
  periodeFix: any[] = [];
  indirectfix: any = {};
  totalFix: any = {};
  indirectDynamic: any = {};
  engagementHB: portefeuillIndirectRapport;
  indirectDynamicArray: any[] = [];

  allPeriods: any[] = [];
  rapportIndirect: rapportIndirect[];
  rapportType: any[] = [];
  rapportTotalDynac: any[] = [];
  resultVariation: any = {};
  resultPourcentage: any = {};
  totalIndirect: any = {};
  portefeuilIndirect: any = {};
  formule: string = "empty";
  selectedYear!: string;
  filterAvailablePeriods: any[] = [];


//-----------------------------------------------------------------






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

  
 
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
   // private servicesRepo: AnalysePortfeuilleServicesService,
    public dialog: MatDialog,
    private commentaireService: CommentaireService,
    private storageSer: StorageSService,
    private portfeuilleIndirectserrvices: PortfeuilleIndirectservicesService,
    private portfeuilleDirectServices: AnalysePortfeuilleServicesService,
    
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

    this.commentaireSubordonne = this.commentaireService.findCommentaireSubordonneByDateAndTypeAnalyse(this.portfeuilleDirectServices.currentAnalyseType,this.storageSer.getUser().roles.id, year, month);
    
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
   
    this.dateYear = this.formBuilder.group({
      years: new FormControl("", [Validators.required]),
    });
    if (this.selectedYear === undefined) {
      this.selectedYear = String(this.years + 1);
    }
   this.slectedPeriods = [];
  // this.stateChanged();
  
   if (this.storageSer.userHasGenererRapport())
   this.disabledGenerateReport = false;
   
   
   this.indirectfix.engagementHb = {};
   this.indirectfix.depotsgarantie = {};
   this.indirectfix.totalfix = {};
   if (this.selectedYear === undefined) {
     this.selectedYear = String(this.years + 1);
   }
   console.log(" year select ", this.selectedYear);
   this.HandelGetRapportType();
  
  }

  graphePortefeuilinDirect() {
    this.route.navigateByUrl(
      "Admin/AnalysePortfeuille/GraphePortfeuilleindirect"
    );
  }
  addEvent(type: string, event: any) {
    var datePipe = new DatePipe("en-US");
    this.selectedYear = datePipe.transform(event._d, "yyyy");
    this.lastYear = parseInt(this.selectedYear) - 1;
    //get all date filterby year
    this.getAllperiode();
    localStorage.setItem(
      "selectedyears",
      JSON.stringify({ data: this.indirectDynamicArray })
    );
  }
  showCheckboxes() {
    this.visible = !this.visible;
  }

  stateChanged(event: any, selctPeriodElt: any) {
    selctPeriodElt.checked = event.target.checked;

    if (event.target.checked) {
      if (this.hasDate(selctPeriodElt.datereporte)) {
        return;
      }
      //ordonner la liste des  total dynamic selon indeex
      this.indirectDynamic.totalDynamic = {};
      let index = this.PeriodeDyna.indexOf(selctPeriodElt);
      this.rapportTotalDynac.push(index);
      this.rapportTotalDynac.sort((a, b) => a.index - b.index);
      //remplir le tebleau avec les periodes selectionner  et les oddonner
      // if (!this.hasDate(selctPeriodElt.datereporte)) {
      // }
      this.PeriodeDyna.push(selctPeriodElt.datereporte);
      this.PeriodeDyna.sort((a, b) => a.id - b.id);
      this.indirectDynamic.engagementhb = selctPeriodElt.engagementHb;
      this.indirectDynamic.depotsgarantie = selctPeriodElt.deportEngagement;

      this.indirectDynamic.totalEngagement = this.getTotalSomme(
        this.indirectDynamic.engagementhb
      );
      this.indirectDynamic.totalDepotsgarantie = this.getTotalSomme(
        this.indirectDynamic.depotsgarantie
      );
      this.getResultat(
        this.indirectDynamic.engagementhb,
        this.indirectDynamic.depotsgarantie,
        this.getSomme,
        this.indirectDynamic.totalDynamic
      );
      this.indirectDynamic.totalDynOfTotal = this.getTotalSomme(
        this.indirectDynamic.totalDynamic
      );

      this.rapportTotalDynac.push(this.indirectDynamic.totalDynamic);
      var lastElement =
        this.rapportTotalDynac[this.rapportTotalDynac.length - 1];
      this.resultVariation = this.getResultat(
        lastElement,
        this.totalFix,
        this.getvariationmontant,
        {}
      );
      this.indirectDynamic.resultVariationTotal = this.getTotalSomme(
        this.resultVariation
      );

      this.resultPourcentage = this.getResultat(
        this.resultVariation,
        this.totalFix,
        this.getPourcentage,
        {}
      );
      this.indirectDynamic.resultPourcentageTotal = this.getTotalSomme(
        this.resultPourcentage
      );
      // console.log(" dynamic ", this.indirectDynamic);
      this.indirectDynamic.date = selctPeriodElt.datereporte;

      this.indirectDynamicArray.push(this.indirectDynamic);
      localStorage.setItem(
        "indirectDynamicArray",
        JSON.stringify({ data: this.indirectDynamicArray })
      );
      localStorage.setItem(
        "PeriodeDyna",
        JSON.stringify({ data: this.PeriodeDyna })
      );

      // if (!this.hasDate(selctPeriodElt.datereporte)) {
      //   console.log(" arrr  y ", this.indirectDynamicArray);
      // }
    } else {
      let index = this.PeriodeDyna.indexOf(selctPeriodElt);
      this.PeriodeDyna.splice(index, 1);
      this.indirectDynamicArray.splice(index, 1);
    }
  }

  protected hasDate(date: any) {
    return this.PeriodeDyna.includes(date);
  }

  getAllperiode() {
    let datePipe = new DatePipe("en-US");
    let dateTransforme;
    this.allPeriods = [];

    this.portfeuilleDirectServices
      .getDateReporting(this.selectedYear)
      .subscribe({
        next: (res) => {
          for (let i = 0; i < res.length; i++) {
            const a1 = {} as any;
            a1.datereporte = res[i]["yearReport"];
            a1.checked = false;
            a1.id = i;
            dateTransforme = datePipe.transform(a1.datereporte, "yyyy-MM-dd");

            //  service  rapport  pour date fixe
            this.getPortefeulleIndire();
            // service rapport pour date selectionner
            for (let i = 0; i <= this.rapportType.length; i++) {
              this.portfeuilleIndirectserrvices
                .getReportPortfeuilleIndirect(
                  this.rapportType[0],
                  dateTransforme
                )
                .subscribe({
                  next: (res) => {
                    a1.engagementHb = res;
                  },
                });

              this.portfeuilleIndirectserrvices
                .getReportPortfeuilleIndirect(
                  this.rapportType[1],
                  dateTransforme
                )
                .subscribe({
                  next: (res) => {
                    a1.deportEngagement = res;
                  },
                });
            }

            this.allPeriods.push(a1);
          }
        },
        complete: () => {
          this.filterAvailablePeriods = this.allPeriods.filter((p) => {
            return p.datereporte.substring(0, 4) == this.selectedYear;
          });
        },
      });
  }
  getResultat(param1: any, param2: any, operation: any, result: any) {
    result.ouvertureLettreCredit = operation(
      param1.ouvertureLettreCredit,
      param2.ouvertureLettreCredit
    );
    result.cautions = operation(param1.cautions, param2.cautions);
    result.aval = operation(param1.aval, param2.aval);
    result.obligationCautionneeDuanee = operation(
      param1.obligationCautionneeDuanee,
      param2.obligationCautionneeDuanee
    );
    return result;
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
  HandelGetRapportType() {
    this.portfeuilleIndirectserrvices.gettRepportType().subscribe({
      next: (res) => {
        for (let i = 0; i <= res.length; i++) {
          this.rapportType.push(res[i]);
        }
      },
    });
  }
  getTotalSomme(param: any) {
    let result =
      param.ouvertureLettreCredit +
      param.obligationCautionneeDuanee +
      param.aval +
      param.cautions;
    return result;
  }

  formatValue(value: any) {
    return ("" + value).replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ");
  }
  changeFormule(event) {
    let formule = event.target.value;
    this.formule = formule;
  }
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
  getPortefeulleIndire() {
    if (!(this.lastYear === undefined)) {
      console.log("laste year here", this.lastYear);
      this.portfeuilleIndirectserrvices
        .getReportPortfeuilleIndirect(
          this.rapportType[0],
          this.lastYear + "-12-31"
        )
        .subscribe((response) => {
          this.indirectfix.engagementHb = response;

          this.totalIndirect.engagementhbTotal = this.getTotalSomme(
            this.indirectfix.engagementHb
          );

          this.portfeuilleIndirectserrvices
            .getReportPortfeuilleIndirect(
              this.rapportType[1],
              this.lastYear + "-12-31"
            )
            .subscribe((response) => {
              this.indirectfix.depotsgarantie = response;
              this.totalIndirect.depotsgarantieTotal = this.getTotalSomme(
                this.indirectfix.depotsgarantie
              );

              this.getResultat(
                this.indirectfix.engagementHb,
                this.indirectfix.depotsgarantie,
                this.getSomme,
                this.indirectfix.totalfix
              );

              this.totalFix = this.indirectfix.totalfix;
              this.totalIndirect.totalFix = this.getTotalSomme(this.totalFix);
            });
        });
    } else {
      this.portfeuilleIndirectserrvices
        .getReportPortfeuilleIndirect(
          this.rapportType[0],
          this.years + "-12-31"
        )
        .subscribe((response) => {
          this.indirectfix.engagementHb = response;

          this.totalIndirect.engagementhbTotal = this.getTotalSomme(
            this.indirectfix.engagementHb
          );

          this.portfeuilleIndirectserrvices
            .getReportPortfeuilleIndirect(
              this.rapportType[1],
              this.years + "-12-31"
            )
            .subscribe((response) => {
              this.indirectfix.depotsgarantie = response;
              this.totalIndirect.depotsgarantieTotal = this.getTotalSomme(
                this.indirectfix.depotsgarantie
              );

              this.getResultat(
                this.indirectfix.engagementHb,
                this.indirectfix.depotsgarantie,
                this.getSomme,
                this.indirectfix.totalfix
              );

              this.totalFix = this.indirectfix.totalfix;
              this.totalIndirect.totalFix = this.getTotalSomme(this.totalFix);
            });
        });
    }
  }
  commentaireAnalysePfIndirect() {
    this.route.navigateByUrl("Admin/AnalysePortfeuille/CommentaireAnalysePfIndirect");
  }


   


 


 






  









 

 



  

 
  
 accepter(){
  moment.locale('fr');
  var today = moment().format("DD-MM-YYYYTHH:mm:SS[Z]")
  var year = moment().year();
  var month = moment().month() + 1;
  
  this.commentaireService.accepter(this.idCommentaireSub).subscribe({
    next: () => {
    //  this.commentaireService.updateCommentaireSub(commentaire) 
    this.commentaireSubordonne = this.commentaireService.findCommentaireSubordonneByDateAndTypeAnalyse(2, this.storageSer.getUser().roles.id, year, month);
    
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
