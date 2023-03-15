import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditRisqueRapport } from 'src/app/Models/CreditRisqueRapport';
import { AnalysePortfeuilleServicesService } from 'src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service';
interface Secteur{
  value:number,
  viewValue:string
}
@Component({
  selector: 'app-scenario3',
  templateUrl: './scenario3.component.html',
  styleUrls: ['./scenario3.component.css']
})
export class Scenario3Component implements OnInit {

  constructor(private servicesRepo: AnalysePortfeuilleServicesService, private formBuilder: FormBuilder) { }

  variation:string = "Classement en douteux (catégorie 1, 2 ou 3) des créances accordées aux n plus grands clients";

  header: string[] =["code",
  "Description",
  "montant en milliards dzd",
  "code","Description",
  "montant en milliards dzd"]; 
  secteur = new FormControl('');
  selectedSecteur;

  public scenarioForm!: FormGroup;
  secteurs: Secteur[] = [{value:1,
  viewValue:'Particulier '},
  {value:2,
    viewValue:'Agriculture  '},
    {value:3,
      viewValue:'Production'},
      {value:4,
        viewValue:'Immobilier'},
        {value:5,
          viewValue:'Commerce '},
          {value:6,
            viewValue:'Service '},
            {value:7,
              viewValue:'Finance '},
              {value:8,
                viewValue:'Public '},
                {value:9,
                  viewValue:'Tous '},
] 

scenario:number = 3;
cs:string  = 'Production';
 pro:number;
 fpr:number = 0;
 rnt:number;
 trp:number;
 tsr:number;
 tp:number;
 tds:number;
 trc:number;
 pra:number;
 tro:number;
 trm:number;
 ccr:number;
 mg:number;
 nb:number;
 mcd:number;
 cd:number;
 mp:number;
 xmp:number;
 intrcr:number;
 intrcd:number;
 nbr:number;

 creditReportFix: any = {};
 creditReportTotal: any[] = [];
 creditReportAnalysePortfeuille: any = {};
 CreditRisqueRapportTotal!: CreditRisqueRapport;
 lastYear: string;
 divUnit: number;
 getPortefeuilleDirecte() {
   this.lastYear = "2020";
   this.divUnit = 1;
   this.creditReportFix.datereportfix = {};
    
     this.creditReportFix.datereportfix = this.lastYear + "-12-31";
     this.servicesRepo
       .getCreditParticulierParPeriode(this.lastYear + "-12-31")
       .subscribe((response) => {
         response.creanceCourant = response.creanceCourant / this.divUnit;
         this.ccr = response.creanceCourant;
         response.creanceDouteuse = response.creanceDouteuse / this.divUnit;
         
         this.cd = response.creanceDouteuse;
         response.creanceDouteuseNets = response.creanceDouteuseNets/ this.divUnit;
         response.creditDirectNetInteretReserve = response.creditDirectNetInteretReserve / this.divUnit;
         response.creditTotaldirect = response.creditTotaldirect / this.divUnit;
         response.interetReserve = response.interetReserve / this.divUnit;
         this.intrcr = response.interetReserve;
         response.interetreservesCreancesDouteuse = response.interetreservesCreancesDouteuse / this.divUnit;
         this.intrcd = response.interetreservesCreancesDouteuse;
         response.provisions = response.provisions / this.divUnit;
         this.pro = response.provisions;
         response.tauxCreanceDouteuse = response.tauxCreanceDouteuse / this.divUnit;
         response.tauxOuverture = response.tauxOuverture / this.divUnit;
         this.creditReportFix.creditParticulier = response;
         this.servicesRepo
           .getCreditEntreParPeriode(this.lastYear + "-12-31")
           .subscribe((response) => {
             response.creanceCourant = response.creanceCourant / this.divUnit;
             this.ccr = this.ccr + response.creanceCourant;
             response.creanceDouteuse = response.creanceDouteuse / this.divUnit;
             this.cd = this.cd + response.creanceDouteuse;
             response.creanceDouteuseNets = response.creanceDouteuseNets/ this.divUnit;
             response.creditDirectNetInteretReserve = response.creditDirectNetInteretReserve / this.divUnit;
             response.creditTotaldirect = response.creditTotaldirect / this.divUnit;
             response.interetReserve = response.interetReserve / this.divUnit;
             this.intrcr = this.intrcr + response.interetReserve;
             response.interetreservesCreancesDouteuse = response.interetreservesCreancesDouteuse / this.divUnit;
             this.intrcd = this.intrcd + response.interetreservesCreancesDouteuse;
             response.provisions = response.provisions / this.divUnit;
             this.pro = this.pro + response.provisions;
             response.tauxCreanceDouteuse = response.tauxCreanceDouteuse / this.divUnit;
             response.tauxOuverture = response.tauxOuverture / this.divUnit;
             this.creditReportFix.creditEntreprise = response;
             this.creditReportFix.totalFix = {};
                          
           

             this.creditReportAnalysePortfeuille.creditReportFix =
               this.creditReportFix;
               this.servicesRepo.creditReportFix =   this.creditReportFix;
           });
       });
   
   console.log("prtf ", this.creditReportAnalysePortfeuille);
 }
 
 ngOnChanges(changes: SimpleChanges){
   console.log(changes)
   this.tds =this.fpr; 
 }

  ngOnInit(): void {
    this.scenarioForm = this.formBuilder.group({
     
      secteurs: this.formBuilder.array([], [Validators.required]),
      });
    this.getPortefeuilleDirecte();
  }

  changeenvent(event) {
    const secteurs: FormArray = this.scenarioForm.get(
      "secteurs"
    ) as FormArray;

    if (event.target.checked) {
      secteurs.push(new FormControl({ value: event.target.value }));
    } else {
      let i: number = 0;
      secteurs.controls.forEach((item: any) => {
        if (item.value.value === event.target.value) {
          secteurs.removeAt(i);
          return;
        }
        i++;
      });   
      
    }
    for (let i=0;i<this.scenarioForm.value.secteurs.length;i++){
      console.log("secteurs : " + this.scenarioForm.value.secteurs[i].value)
    }
  }
  selectSecteurs(event: Event) {
    this.selectedSecteur= (event.target as HTMLSelectElement).value;

    console.log("val : "+this.secteur.value)
    
  }
}
