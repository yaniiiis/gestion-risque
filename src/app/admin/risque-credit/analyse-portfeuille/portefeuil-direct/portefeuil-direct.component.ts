import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-portefeuil-direct',
  templateUrl: './portefeuil-direct.component.html',
  styleUrls: ['./portefeuil-direct.component.css']
})
export class PortefeuilDirectComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  portefeuilDirectTable(){


    this.route.navigateByUrl("/Admin/AnalysePortfeuille/Portfeuilledirect");
  }
}
