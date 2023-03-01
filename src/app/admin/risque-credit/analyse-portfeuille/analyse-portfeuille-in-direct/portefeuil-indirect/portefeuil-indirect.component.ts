import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-portefeuil-indirect',
  templateUrl: './portefeuil-indirect.component.html',
  styleUrls: ['./portefeuil-indirect.component.css']
})
export class PortefeuilIndirectComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  portefeuilinDirectTable(){
    this.route.navigateByUrl("/Admin/AnalysePortfeuille/Portfeuilledirect");
  }
}
