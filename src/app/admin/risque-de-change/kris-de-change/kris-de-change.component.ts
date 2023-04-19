import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
import { AnalysePortfeuilleServicesService } from 'src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service';
import { IndicateurService } from 'src/app/_services/indicateur.service';
import { SoldeCompteService } from 'src/app/_services/solde-compte.service';
import * as _moment from "moment";
import { FondsPropresService } from 'src/app/_services/fonds-propres.service';

interface indicateur{
  id: number,
  description: string,
  valeurMinimum: number,
  valeurLimite: number,
  dateEffet : Date
}

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

interface  Devise {
  item_id : string,
  item_text :string
  }

  interface Ratio  {
    devise : string,
    date : string,
    ratio : number
   }

   interface RatioGlobal  {
    date : string,
    ratio : number
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
    background-color: lightgray;
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
    font-size: 13px;
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
    font-size: 13px;
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

  header: string[] = [
   
    "Limit",
    "Trigger",
    "Rating",
   
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

 

  soldeCompte : number;
  fp : number ;
  listAffichePosition : affichePosition[] = []

  totalAffichePosition : totalAffichePosition = {
    devise: '',
    positionCourte:0,
    positionLongue:0,
    positionNetteCourte:0,
    positionNetteLongue:0,
    ratio:0,
    fpn:0
  };

positionOfAllDevises: string[];
dateTransforme : string ='2022-09-29'
dateSelectedItems : Devise[] = [];
deviseSelectedItems : Devise[] = [];
ratio : Ratio[] = [];
ratioGlobal : RatioGlobal[] = [];
constructor( private soldeCompteService: SoldeCompteService, 
             private indicateurService:IndicateurService,
             private servicesRepo: AnalysePortfeuilleServicesService,
             private fondsPropresServices: FondsPropresService) { }


  ngOnInit(): void {
  

    this.soldeCompteService.getRatioRessourcesDuCompteEnDeviseEtrangereDesClients().subscribe((data) =>{
      this.soldeCompte = data;
      //console.log('solde compte : ' + this.soldeCompte);
      this.data[0].value.push(this.soldeCompte);
     })

          //this.selectedItems = ['AED']
          var dateNow = _moment.now()

          var datePipe = new DatePipe("en-US");
          this.dateTransforme = datePipe.transform(dateNow, "yyyy-MM-dd");
     
         // Fonds propres 
     
         this.fondsPropresServices.getFondsPropresByDate('2022-09-29').subscribe((data) =>{
           this.fp=data;
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
    
     this.calculIndicateur()


     // les date pour kris

       this.dateSelectedItems = [
       { item_id: '2021-12-31', item_text: '2021-12-31' },
       { item_id: '2022-01-31', item_text: '2022-01-31' },
       { item_id: '2022-09-29', item_text: '2022-09-29' },
       ];

     // les devise pour kris  

    //  this.deviseSelectedItems = [
    //   { item_id: 'AED', item_text: 'AED' },
    //   { item_id: 'CAD', item_text: 'CAD' },
    //   { item_id: 'CHF', item_text: 'CHF' },
    //   { item_id: 'DZD', item_text: 'DZD' },
    //   { item_id: 'EUR', item_text: 'EUR' },
    //   { item_id: 'GBP', item_text: 'GBP' },
    //   { item_id: 'USD', item_text: 'USD' }
       
    // ];

    let allDevises : string[];
    this.soldeCompteService.findAllDevises().subscribe({
      next : (data) =>{
        allDevises = data;

        allDevises.forEach(d =>{
          this.deviseSelectedItems.push({ item_id: d, item_text: d }) 
        })
      }
    })

    this.deviseSelectedItems.forEach(devise => 
    this.dateSelectedItems.forEach(date => {  
      this.soldeCompteService.getRatioByDevise(date.item_id, devise.item_id).subscribe({
        next:(value) => {
                        const a = {} as Ratio;
                         a.devise = devise.item_id
                         a.date = date.item_id
                         a.ratio = value    
                         this.ratio = this.ratio.concat(a);                                                
                        }  
      })
    })
    )
    this.dateSelectedItems.forEach((date) =>{
        // position global pour la date selectionnée ...
        const rg : RatioGlobal = {
          date: '',
          ratio: 0
        };

        rg.date = date.item_id
       this.soldeCompteService.getRatioGlobal(date.item_id).subscribe((data) =>{
        rg.ratio = data
       });

        this.ratioGlobal.push(rg);
    })
  }
  
  calculIndicateur(){
    this.soldeCompteService.getPositionOfAllDevises(this.dateTransforme).subscribe((data) =>{     
      this.positionOfAllDevises = data;
      //console.log('affichePosition '+ this.listAffichePosition)
      this.listAffichePosition=[]

       this.totalAffichePosition.positionCourte=0;
       this.totalAffichePosition.positionLongue=0;
       this.totalAffichePosition.positionNetteCourte=0;
       this.totalAffichePosition.positionNetteLongue=0;
       this.totalAffichePosition.ratio = 0;
       this.totalAffichePosition.fpn = 0;
      
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
 
       this.totalAffichePosition.positionCourte=this.totalAffichePosition.positionCourte+Number.parseFloat(data[i][1]);
       this.totalAffichePosition.positionLongue=this.totalAffichePosition.positionLongue+Number.parseFloat(data[i][2]);
       this.totalAffichePosition.positionNetteCourte=this.totalAffichePosition.positionNetteCourte+Number.parseFloat(data[i][3]);
       this.totalAffichePosition.positionNetteLongue=this.totalAffichePosition.positionNetteLongue+Number.parseFloat(data[i][4]);
       this.totalAffichePosition.ratio = this.totalAffichePosition.ratio + x;
       this.totalAffichePosition.fpn = this.fp;
 
     }
      });
  }

  getRatioByDevise(date : string, devise: string) : number{
     
    if(this.ratio.length > 0 ){
    //return this.ratio?.find(value => (value?.devise===devise && value?.date===date))?.ratio
        let found = 0;
        for(let i=0;i<this.ratio.length;i++){
          // console.log('date : '+this.ratio[i].date)
          // console.log('devise : '+this.ratio[i].devise)
          if (this.ratio[i].date === date && this.ratio[i].devise === devise){
            found = this.ratio[i].ratio
            break;
          } 
        }
        return found;
    }       
 
    else return 0;

  
}
getRatioGlobal(date : string) : number{

  if(this.ratioGlobal.length > 0 ){
    //return this.ratio?.find(value => (value?.devise===devise && value?.date===date))?.ratio
        let found = 0;
        for(let i=0;i<this.ratioGlobal.length;i++){
          // console.log('date : '+this.ratio[i].date)
          // console.log('devise : '+this.ratio[i].devise)
          if (this.ratioGlobal[i].date === date){
            found = this.ratioGlobal[i].ratio
            break;
          } 
        }
        return found;
    }       
 
    else return 0;
}
  
}
