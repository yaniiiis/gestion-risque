import { Component, OnInit } from "@angular/core";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { FondsPropresService } from "src/app/_services/fonds-propres.service";
import { IndicateurService } from "src/app/_services/indicateur.service";
import { SoldeCompteService } from "src/app/_services/solde-compte.service";
import * as _moment from "moment";
import { DatePipe } from "@angular/common";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";

interface affichePosition {
  devise: string;
  positionLongue: number;
  positionCourte: number;
  positionNetteLongue: number;
  positionNetteCourte: number;
  ratio: number;
}
interface totalAffichePosition {
  devise: string;
  positionLongue: number;
  positionCourte: number;
  positionNetteLongue: number;
  positionNetteCourte: number;
  fpn: number;
  ratio: number;
}

interface indicateur {
  id: number;
  description: string;
  valeurMinimum: number;
  valeurLimite: number;
  dateEffet: Date;
}
interface Devise {
  item_id: string;
  item_text: string;
}

@Component({
  selector: "app-position-par-date",
  templateUrl: "./position-par-date.component.html",
  styleUrls: ["./position-par-date.component.css"],
})
export class PositionParDateComponent implements OnInit {
  constructor(
    private soldeCompteService: SoldeCompteService,
    private servicesRepo: AnalysePortfeuilleServicesService,
    private indicateurService: IndicateurService,
    private fondsPropresServices: FondsPropresService
  ) {}

  soldeCompte: number;
  fp: number;
  listAffichePosition: affichePosition[] = [];

  totalAffichePosition: totalAffichePosition = {
    devise: "",
    positionCourte: 0,
    positionLongue: 0,
    positionNetteCourte: 0,
    positionNetteLongue: 0,
    ratio: 0,
    fpn: 0,
  };

  positionOfAllDevises: string[];

  header1: string[] = [
    "POSITION LONGUE",
    "POSITION COURTE",
    "POSITION NETTE LONGUE",
    "POSITION NETTE COURTE",
    "FPN",
    "RATIO2_PART DES FPN",
  ];

  indicateur1: indicateur = {
    id: 0,
    description: "",
    dateEffet: null,
    valeurLimite: 0,
    valeurMinimum: 0,
  };
  indicateur2: indicateur = {
    id: 0,
    description: "",
    dateEffet: null,
    valeurLimite: 0,
    valeurMinimum: 0,
  };

  indicateur3: indicateur = {
    id: 0,
    description: "",
    dateEffet: null,
    valeurLimite: 0,
    valeurMinimum: 0,
  };

  selectedDate: string;
  dateTransforme: string;
  event: string;

  selectedDevise: string[];

  dropdownList = [];
  selectedItems: Devise[] = [{ item_id: "AED", item_text: "AED" }];
  dropdownSettings: IDropdownSettings = {};

  ngOnInit(): void {
    // this.selectedDate = '2022-09-29';
    //this.selectedItems = ['AED']
    var dateNow = _moment.now();

    var datePipe = new DatePipe("en-US");
    this.dateTransforme = datePipe.transform(this.selectedDate, "yyyy-MM-dd");

    // Fonds propres

    this.fondsPropresServices
      .getFondsPropresByDate(this.selectedDate)
      .subscribe((data) => {
        this.fp = data;
      });

    // this.calculIndicateur()

    // Position de change
    this.servicesRepo.currentAnalyseType = 5;

    // recuperation des parametres des indicateurs
    // Les ressources du compte en devise étrangère des clients
    this.indicateurService.getIndicateurById(11).subscribe((data) => {
      this.indicateur1 = data;
    });

    //Position par devise
    this.indicateurService.getIndicateurById(12).subscribe((data) => {
      this.indicateur2 = data;
    });
    //Total position par devise
    this.indicateurService.getIndicateurById(13).subscribe((data) => {
      this.indicateur3 = data;
    });

    let allDevises: string[] = [];
    this.soldeCompteService.findAllDevises().subscribe({
      next: (data) => {
        allDevises = data;
        this.dropdownList = [];
        this.selectedItems = [];
        allDevises.forEach((d) => {
          this.dropdownList = this.dropdownList.concat([
            { item_id: d, item_text: d },
          ]);
          this.selectedItems.push({ item_id: d, item_text: d });
        });
      },
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Sélectionner tous",
      unSelectAllText: "Désélectionner tous",
      itemsShowLimit: 8,
      allowSearchFilter: true,
    };

    this.calculIndicateur();
  }

  onItemSelect(item: any) {
    //  this.selectedItems.push(item)

    this.calculIndicateur();
    // console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    // console.log(items);
    this.calculIndicateur();
  }
  onDeSelectAll(items: any) {
    // console.log(items);
    this.calculIndicateur();
  }
  onItemDeSelect(item: any) {
    this.calculIndicateur();
    // console.log(this.selectedItems);
  }
  calculIndicateur() {
    this.soldeCompteService
      .getPositionOfAllDevises(this.dateTransforme)
      .subscribe((data) => {
        this.positionOfAllDevises = data;
        //console.log('affichePosition '+ this.listAffichePosition)
        this.listAffichePosition = [];

        this.totalAffichePosition.positionCourte = 0;
        this.totalAffichePosition.positionLongue = 0;
        this.totalAffichePosition.positionNetteCourte = 0;
        this.totalAffichePosition.positionNetteLongue = 0;
        this.totalAffichePosition.ratio = 0;
        this.totalAffichePosition.fpn = 0;

        for (let i = 0; i < data.length; i++) {
          let a: affichePosition = {
            devise: "a",
            positionCourte: 0,
            positionLongue: 0,
            positionNetteCourte: 0,
            positionNetteLongue: 0,
            ratio: 0,
          };
          let x: number;

          if (Number.parseFloat(data[i][3]) === 0) {
            x = Number.parseFloat(data[i][4]) / this.fp;
          } else {
            x = Number.parseFloat(data[i][3]) / this.fp;
          }

          a.devise = data[i][0];
          a.positionCourte = Number.parseFloat(data[i][1]);
          a.positionLongue = Number.parseFloat(data[i][2]);
          a.positionNetteCourte = Number.parseFloat(data[i][3]);
          a.positionNetteLongue = Number.parseFloat(data[i][4]);
          a.ratio = x;

          //  this.selectedItems.map(p=>p.item_id).forEach(a =>console.log('a'+a))

          if (this.selectedItems.map((d) => d.item_id).includes(data[i][0])) {
            this.listAffichePosition.push(a);

            this.totalAffichePosition.positionCourte =
              this.totalAffichePosition.positionCourte +
              Number.parseFloat(data[i][1]);
            this.totalAffichePosition.positionLongue =
              this.totalAffichePosition.positionLongue +
              Number.parseFloat(data[i][2]);
            this.totalAffichePosition.positionNetteCourte =
              this.totalAffichePosition.positionNetteCourte +
              Number.parseFloat(data[i][3]);
            this.totalAffichePosition.positionNetteLongue =
              this.totalAffichePosition.positionNetteLongue +
              Number.parseFloat(data[i][4]);
            this.totalAffichePosition.ratio =
              this.totalAffichePosition.ratio + x;
            this.totalAffichePosition.fpn = this.fp;
          }
        }
      });
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    var datePipe = new DatePipe("en-US");
    this.event = `${event.value}`;
    this.dateTransforme = datePipe.transform(this.event, "yyyy-MM-dd");

    var date1: Date;
    date1 = new Date(this.selectedDate);
    //console.log('selected date : '+ this.dateTransforme)
    this.calculIndicateur();
  }
}
