import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-scenario3',
  templateUrl: './scenario3.component.html',
  styleUrls: ['./scenario3.component.css']
})
export class Scenario3Component implements OnInit {

  constructor() { }

  variation:string = "Classement en douteux (catégorie 1, 2 ou 3) des créances accordées aux n plus grands clients";

  header: string[] =["code",
  "Description",
  "montant en milliards dzd",
  "code","Description",
  "montant en milliards dzd"]; 
scenario:number = 3;
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
