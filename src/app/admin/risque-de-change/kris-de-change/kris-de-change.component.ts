import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnalysePortfeuilleServicesService } from 'src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service';
import { IndicateurService } from 'src/app/_services/indicateur.service';
import { SoldeCompteService } from 'src/app/_services/solde-compte.service';
interface  affichePosition{
  devise: string,
  positionLongue: number,
  positionCourte: number,
  positionNetteLongue :number,
  positionNetteCourte: number,
  ratio: number
}
interface  totalAffichePosition{
  devise: string,
  positionLongue: number,
  positionCourte: number,
  positionNetteLongue :number,
  positionNetteCourte: number,
  fpn: number;
  ratio: number
}

interface indicateur{
  id: number,
  description: string,
  valeurMinimum: number,
  valeurLimite: number,
  dateEffet : Date
}
@Component({
  selector: 'app-kris-de-change',
  templateUrl: './kris-de-change.component.html',
  //styleUrls: ['./kris-de-change.component.css']
  styles:[`.card {
    width: fit-content;
  }
  
  .yz_container {
    padding: 1.25rem;
  }
  table {
    border-collapse: collapse;
    overflow-x: scroll;
    border: 1px solid rgb(155, 154, 154);
    background-color: white;
  }
  table thead th,
  table tbody td {
    border-collapse: collapse;
  }
  table thead th,
  .tbody__td--label,
  .tbody__td,
  .tbody__td--limit,
  .tbody__td--commentaire,
  .tbody__td--trigger {
    border: 1px solid rgb(83, 82, 82);
  }
  thead {
    background-color: rgba(7, 194, 194, 0.76);
  }
  thead th {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-size: 12px;
    text-align: center;
  }
  .theed__th--indicateur {
    font-size: 15px;
    text-align: center;
  }
  .tbody__td {
    font-size: 13px;
  }
  .tbody__td--label {
    font-size: 11px;
    padding-left: 4px;
    padding-right: 4px;
    height: 25px;
    overflow-y: hidden;
    line-height: 18px;
    min-width: 350px;
    max-height: 50px;
  }
  
  .tbody__td__tr {
    width: 100%;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgb(165, 165, 165);
    font-weight: 600;
    font-size: 10px;
  }
  .tbody__td--limit {
    text-align: center;
    font-size: 14px;
  }
  .tbody__td--commentaire {
    width: 100px;
    text-align: center;
  }
  
  .tbody__td--compareValues {
    width: 70px;
    text-align: center;
  }
  .tbody__td--colors {
    width: 50px;
    height: 15px;
    border-bottom: 1px solid rgb(165, 165, 165);
  }
  .yz_green {
    color: green;
  }
  .yz_yellow {
    color: orange;
  }
  .yz_red {
    color: red;
  }
  .yz_bgGreen {
    background-color: green;
  }
  .yz_bgYellow {
    background-color: orange;
  }
  .yz_bgRed {
    background-color: red;
  }`]
})
export class KRIsDeChangeComponent implements OnInit {

constructor(private soldeCompteService: SoldeCompteService,  private servicesRepo: AnalysePortfeuilleServicesService, private indicateurService:IndicateurService) { }
soldeCompte : number;
fp : number = 17700000000;
listAffichePosition : affichePosition[] = []

totalAffichePosition : totalAffichePosition = {devise: '',
positionCourte:0,
positionLongue:0,
positionNetteCourte:0,
positionNetteLongue:0,
ratio:0,
fpn:0};

positionOfAllDevises: string[];

  header: string[] = [
    "Ratio",
    "Limit",
    "Trigger",
   
  ];

  data: any[] = [
    {
      value: [],
      limit: 30,
      label: "Les ressources du compte en devise étrangère des clients",
      min: 20,
      unit: "%",
     
    }
  ];

  header1: string[] = [
    "POSITION LONGUE",
    "POSITION COURTE",
    "POSITION NETTE LONGUE",
    "POSITION NETTE COURTE",
    "FPN",
    "RATIO2_PART DES FPN"
   
  ];

 
indicateur1 : indicateur ={
  id:0,
  description:'',
  dateEffet: null,
  valeurLimite:0,
  valeurMinimum:0,
  
}
indicateur2 : indicateur ={
  id:0,
  description:'',
  dateEffet: null,
  valeurLimite:0,
  valeurMinimum:0,  
}

indicateur3 : indicateur ={
  id:0,
  description:'',
  dateEffet: null,
  valeurLimite:0,
  valeurMinimum:0,  
}
  ngOnInit(): void {
     this.soldeCompteService.getRatioRessourcesDuCompteEnDeviseEtrangereDesClients().subscribe((data) =>{
      this.soldeCompte = data;
      //console.log('solde compte : ' + this.soldeCompte);
      this.data[0].value.push(this.soldeCompte);
     })

     this.calculIndicateur()
     
    
     // Position de change
     this.servicesRepo.currentAnalyseType = 5;  


     // recuperation des parametres des indicateurs
     // Les ressources du compte en devise étrangère des clients
      this.indicateurService.getIndicateurById(11).subscribe((data) =>{
         this.indicateur1 = data;
      })  
      
      //Position par devise
      this.indicateurService.getIndicateurById(12).subscribe((data) =>{
        this.indicateur2 = data;
      }) 
      //Total position par devise
      this.indicateurService.getIndicateurById(13).subscribe((data) =>{
      this.indicateur3 = data;
     })  
  }
  calculIndicateur(){
    this.soldeCompteService.getPositionOfAllDevises().subscribe((data) =>{     
      this.positionOfAllDevises = data;
      //console.log('affichePosition '+ this.listAffichePosition)
      this.listAffichePosition=[]
      
      for (let i=0;i<data.length;i++) {
       let a: affichePosition = {
         devise:'a',
         positionCourte:0,
         positionLongue:0,
         positionNetteCourte:0,
         positionNetteLongue:0,
         ratio:0
       };
       let x:number;
 
       if(Number.parseFloat(data[i][3]) ===0) {
         x= Number.parseFloat(data[i][4]) / this.fp;
        
       } else{
         x= Number.parseFloat(data[i][3]) / this.fp;
        
       }
 
       a.devise = data[i][0];
       a.positionCourte = Number.parseFloat(data[i][1]);
       a.positionLongue = Number.parseFloat(data[i][2]);
       a.positionNetteCourte = Number.parseFloat(data[i][3]);
       a.positionNetteLongue = Number.parseFloat(data[i][4]);
       a.ratio = x;
       this.listAffichePosition.push(a);
 
       this.totalAffichePosition.positionCourte=this.totalAffichePosition.positionCourte+Number.parseFloat(data[i][1]);
       this.totalAffichePosition.positionLongue=this.totalAffichePosition.positionLongue+Number.parseFloat(data[i][2]);
       this.totalAffichePosition.positionNetteCourte=this.totalAffichePosition.positionNetteCourte+Number.parseFloat(data[i][3]);
       this.totalAffichePosition.positionNetteLongue=this.totalAffichePosition.positionNetteLongue+Number.parseFloat(data[i][4]);
       this.totalAffichePosition.ratio = this.totalAffichePosition.ratio + x;
       this.totalAffichePosition.fpn = this.fp;
     }
      });
  }

}
