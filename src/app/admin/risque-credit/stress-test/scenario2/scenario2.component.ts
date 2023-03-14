import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-scenario2',
  templateUrl: './scenario2.component.html',
  styleUrls: ['./scenario2.component.css']
})
export class Scenario2Component implements OnInit {

  constructor() { }
  variation:string= "Variation des créances douteuses de n% du solde du portefeuille des créances courantes";

  header: string[] =["code",
  "Description",
  "montant en milliards dzd",
  "code","Description",
  "montant en milliards dzd"]; 

 scenario:number = 2;
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
 
 ngOnChanges(changes: SimpleChanges){
   console.log(changes)
   this.tds =this.fpr; 
 }

  ngOnInit(): void {
  }

}
