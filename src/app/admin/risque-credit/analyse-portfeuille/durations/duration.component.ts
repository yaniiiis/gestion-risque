import { DatePipe } from '@angular/common';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {

  constructor() { }

  
  
  ngOnInit(): void {
    console.log(this.my_date);
    
  }
 datePipe = new DatePipe('en-US');
  date = new Date;
  my_date = this.datePipe.transform(this.date, 'dd/MM/yyyy')



selectingDate= ["30-09-2022",this.my_date]
dateHead=["27/11/2021","27/02/2021","27/05/2022","27/08/2022",this.my_date]
title=["Table Portefeuille"," Table Portefeuille Islamique","Table Portefeuille Leasing"]
 dataTablePortefeuille : any =[
                  {
                    lable:"Total du portefeulle direct",
                    value:[38.14,37.89,28.25,32.52,31.30]
                  },
                  {
                    lable:"Nombre des clients à engagements directs",
                    value:[337,329,330,337,331]
                  }  ,
                  {
                    lable:"Nombre des clients à engagements directs",
                    value:[337,329,330,337,331]
                  }
                    ,
                  {
                    lable:"Nombre total des comptes à engagements directs ",
                    value:[337,329,330,337,331]
                  }
                    ,
                  {
                    lable:"Total des créances douteuses",
                    value:[337,329,330,337,331]
                  }
                    ,
                  {
                    lable:"Total des créances impayées",
                    value:[337,329,330,337,331]
                  }
                    ,
                  {
                    lable:"Total des créances courantes  ",
                    value:[337,329,330,337,331]
                  }
                    ,
                  {
                    lable:"Taux moyen du portefeuille crédit direct ",
                    value:["7.77 %","6.70%","8.45%","8.27%","8.21%"]
                  }
                    ,
                  {
                    lable:"Taux moyen du découvert en compte  ",
                    value:["6.06 %","6.03 %","6.44 %","6.31 %","6.43 %"]
                  }
                    ,
                  {
                    lable:"Taux moyen des crédits dont l’échéance est moins de 1 an sans le découvert en compte ",
                    value:["9.03 %","7.40 %","8.04 %","9.04 %","8.68 %"]
                  }
                    ,
                  {
                    lable:"Taux moyen des crédits dont l'échéance > à 1 an",
                    value:["7.93 %","7.83 %","7.70 %","7.73 %","7.72 %"]
                  }
                    ,
                  {
                    lable:"Coût de la ressource",
                    value:["0.76 %","0.78 %","0.33 %","0.44 %","0.51 %"]
                  }
                    ,
                  {
                    lable:"Part des engagements sous forme de découvert en compte",
                    value:["50 %","55 %","65 %","32 %","34 %"]
                  }
                    ,
                  {
                    lable:"Part des engagements des crédits dont l’échéance est moins de 1 an sans le découvert en compte", 
                    value:["41 %","36 %","32 %","59 %","56 %"]
                  }
                    ,
                  {
                    lable:"Part des engagements dont l'échéance est supérieure à 1 an",
                    value:["9 %","9 %","12 %","9 %","10 %"]
                  },
                  {
                    lable:"Duration du portefeuille selon l'hypothèse 1",
                    value:["293 jrs/ 0.8 ans ","318 jrs/ 0.9 ans ","284 jrs/ 0.78 ans ","260 jrs/ 0.7 ans","279 jrs/ 0.8 ans"]
                  },
                  {
                    lable:"Duration du portefeuille selon l'hypothèse 2 ",
                    value:["650  jrs/ 1.8 ans ","372 jrs/ 1.8 ans ","562 jrs/ 1.5 ans ","512 jrs/ 1.4 ans","593 jrs/ 1.6 ans"]
                  }
 ]
 dataTablePortefeuilleIslamique : any =[
                  {
                    lable:"Total du portefeuille direct islamique ",
                    value:[6.18,6.16,7.05,8.77,8.14]
                  },
                  {
                    lable:"Nombre des clients à engagements directs islamique",
                    value:[44,40,43,39,40]
                  }  ,
                  {
                    lable:"Nombre total des comptes à engagements directs islamique",
                     value:[262,235,278,324,318]
                  }
                    ,
                  {
                    lable:"Total des créances douteuses islamiques",
                    value:[0.37,0.37,0.37,0.37,0.37]
                  }
                    ,
                  {
                    lable:"Total des créances courantes  islamiques",
                    value:[5.81,5.79,6.68,8.4,7.77]
                  }
                    ,
                  {
                    lable:"Total des provisions islamiques",      
                     value:[0.25,0.25,0.25,0.25,0.25]
                  }
                    ,
                  {
                    lable:"Total des créances  impayées islamiques",
                    value:[0.26,0.006,0.054,0.24,0.480]
                  }
 ]


 dataTablePortefeuilleLeasing : any =[
                  {
                    lable:"Total du portefeulle direct",
                    value:[1.26,1.14,0.91,0.86,0.87]
                  },
                  {
                    lable:"Nombre des clients à engagements directs",
                    value:[337,329,330,337,331]
                  }  ,
                  {
                    lable:"Nombre des clients à engagements directs",
                    value:[21,17,18,19,20]
                  }
                    ,
                  {
                    lable:"Nombre total des comptes à engagements directs ",
                    value:[85,81,58,59,56]
                  }
                    ,
                  {
                    lable:"Total des créances douteuses",
                    value:[0.15,0.12,0.12,0.12,0.12]
                  }
                    ,
                  {
                    lable:"Total des créances impayées",
                    value:[1.11,1.02,0.79,0.74,0.75]
                  }
                    ,
                  {
                    lable:"Total des créances courantes  ",
                    value:[0.014,0.01,0.008,0.012,0.020]
                  }
 ]


 
//  selectedDate(event){
//   console.log(event)
//   // let datePicker = document.querySelector('select.date-picker')
//   // console.log(datePicker.getAttribute('value'))
 
//  }
}

 
