import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import moment from 'moment';

import { default as _rollupMoment, Moment } from "moment";
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { element } from 'protractor';
import { interval, lastValueFrom, map, Observable, Subscription, take, tap } from 'rxjs';
import { SoldeCompteService } from 'src/app/_services/solde-compte.service';

import * as _moment from "moment";
import { IndicateurService } from 'src/app/_services/indicateur.service';

interface indicateur{
  id: number,
  description: string,
  valeurMinimum: number,
  valeurLimite: number,
  dateEffet : Date
}
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY',
  },
};

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
  selector: 'app-position-par-plusieurs-dates',
  templateUrl: './position-par-plusieurs-dates.component.html',
  styleUrls: ['./position-par-plusieurs-dates.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
     // deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { 
     provide: MAT_DATE_FORMATS, useValue: MY_FORMATS
    },
   ]
})
export class PositionParPlusieursDatesComponent implements OnInit {

  selectedYear!: string;

  deviseDropdownList = [];
  deviseSelectedItems : Devise[] = [{item_id: 'AED', item_text:'AED'}];
  deviseDropdownSettings :IDropdownSettings = {};

  dateDropdownList : Devise[] = [];
  dateSelectedItems : Devise[] = [];
  dateDropdownSettings :IDropdownSettings = {};

  dateTransforme: string;

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

  constructor(private soldeCompteService : SoldeCompteService,
    private indicateurService:IndicateurService) { }

  ngOnInit(): void {
    let allDevises : string[];
    this.soldeCompteService.findAllDevises().subscribe({
      next : (data) =>{
        allDevises = data;
        allDevises.forEach(d =>{
          this.deviseDropdownList=  this.deviseDropdownList.concat({ item_id: d, item_text: d }) 
          this.deviseSelectedItems.push({ item_id: d, item_text: d })
        })
      }
    })
    // this.deviseDropdownList = [
    //   { item_id: 'AED', item_text: 'AED' },
    //   { item_id: 'CAD', item_text: 'CAD' },
    //   { item_id: 'CHF', item_text: 'CHF' },
    //   { item_id: 'EUR', item_text: 'EUR' },
    //   { item_id: 'GBP', item_text: 'GBP' },
    //   { item_id: 'USD', item_text: 'USD' }
    // ];
    this.deviseSelectedItems = [
      // { item_id: 3, item_text: 'CHF' },
      // { item_id: 4, item_text: 'EUR' }
    ];
    this.deviseDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Sélectionner tous',
      unSelectAllText: 'Désélectionner tous',
      itemsShowLimit: 8,
      allowSearchFilter: true
    };

    //--------------------------------------------date dropdown list
    
   

    this.dateDropdownList = [
     
    ];
    this.dateSelectedItems = [
      // { item_id: 3, item_text: 'CHF' },
      // { item_id: 4, item_text: 'EUR' }
    ];
    this.dateDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Sélectionner tous',
      unSelectAllText: 'Désélectionner tous',
      itemsShowLimit: 8,
      allowSearchFilter: true
    };

    //Position par devise
    this.indicateurService.getIndicateurById(12).subscribe((data) =>{
      this.indicateur2 = data;
    }) 

    //Total position par devise
    this.indicateurService.getIndicateurById(13).subscribe((data) =>{
      this.indicateur3 = data;
     }) 


     // Ratio global pour toutes les devises


  }

  

    // filte by year and get report fix
    addEvent(type: string, event: any) {
      var datePipe = new DatePipe("en-US");
      this.selectedYear = datePipe.transform(event._d, "yyyy");
     
    }
    sub : Subscription;
    dateForm = new FormControl('');
    @ViewChild('picker', { static: false })
    private picker!: MatDatepicker<Date>;  
    selectYear:number = 2022
    chosenYearHandler(ev, input){
      let { _d } = ev;
      this.selectYear = _d;
      var datePipe = new DatePipe("en-US");
      this.selectedYear = datePipe.transform(_d, "yyyy");
      console.log("selected year "+this.selectedYear)

      let allDates : string[] = []

      this.soldeCompteService.findSoldeCompteDatesByYear(this.selectedYear).subscribe((data) =>{
        allDates = data;

        //allDates.push('2022-09-29')
        allDates.push('2022-10-29')
        allDates.push('2022-11-29')
        allDates.push('2022-12-29')
        console.log("all dates : "+ allDates)
        this.dateDropdownList = []
        allDates.forEach((d) =>{
        //  this.dateDropdownList.push
           this.dateDropdownList = this.dateDropdownList.concat([
             { item_id: d, item_text: d }
           ]);
        })
        
      
      })

      this.picker.close()
    }

   

    ratio : Ratio[] = [];
    ratioGlobal : RatioGlobal[] = [];
    r: Ratio = {
      date:"",
      devise:"",
      ratio:0
    };
      onDeviseItemSelect(item: any) {  
       this.dateSelectedItems.forEach(date => {  
        this.soldeCompteService.getRatioByDevise(date.item_id, item.item_id).subscribe({
          next:(value) => {
                          const a = {} as Ratio;
                           a.devise = item.item_id
                           a.date = date.item_id
                           a.ratio = value    
                           this.ratio = this.ratio.concat(a);                                                
                          }  
        })
      })
      }
      onDeviseSelectAll(items: any) {

        items.forEach(item =>{
          this.dateSelectedItems.forEach(date => {  
            this.soldeCompteService.getRatioByDevise(date.item_id, item.item_id).subscribe({
              next:(value) => {
                              const a = {} as Ratio;
                               a.devise = item.item_id
                               a.date = date.item_id
                               a.ratio = value    
                               this.ratio = this.ratio.concat(a);                                                
                              }  
            })
          })
        })
     
      }
      onDeviseDeSelectAll(items: any) {
       
      }
      onDeviseItemDeSelect (item: any){
       
      }

      onDateItemSelect(item: any) {     
        // position global pour la date selectionnée ...
       
        this.ratioGlobal  = [];
        
        this.soldeCompteService.getRatioGlobal(item.item_id).subscribe({
          next:(value)=>{
            const rg : RatioGlobal = {
              date: '',
              ratio: 0
            };
            rg.date = item.item_id
            rg.ratio = value;
            this.ratioGlobal.push(rg);
          }
        })

        

      }
      onDateSelectAll(items: any) {
        this.ratioGlobal  = [];
        // position global pour toutes les dates selectionnée ...
        console.log('items.length '+items.length)
        console.log('items.array' + items.array)
      
        console.log('items.array' + items.array)
       items.forEach(item => {    

        this.soldeCompteService.getRatioGlobal(item.item_id).subscribe({
          next:(value)=>{
            const rg : RatioGlobal = {
              date: '',
              ratio: 0
            };
    
            rg.date = item.item_id
            console.log('ratio global : '+value)
            rg.ratio = value;
            this.ratioGlobal.push(rg);
          }
        })

       
        
       });       
       
      }
      onDateDeSelectAll(items: any) {
       
      }
      onDateItemDeSelect (item: any){
       
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
                if(this.ratioGlobal[i]!==undefined){
                  if (this.ratioGlobal[i].date === date){
                  found = this.ratioGlobal[i].ratio
                  break;
                } 
              }
              }
              console.log('found '+found)
              return found;
          }       
       
          else return 0;
    }
     

}
