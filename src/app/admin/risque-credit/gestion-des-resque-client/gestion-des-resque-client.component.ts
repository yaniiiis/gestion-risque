import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AllSelected } from "src/app/Models/AllSelected";
import { AnalysePortfeuilleServicesService } from "src/app/_services/analysePrtfeuille/analyse-portfeuille-services.service";
import { StorageSService } from "src/app/_services/storageService/storage-s.service";

@Component({
  selector: "app-gestion-des-resque-client",
  templateUrl: "./gestion-des-resque-client.component.html",
  styleUrls: ["./gestion-des-resque-client.component.css"],
})
export class GestionDesResqueClientComponent implements OnInit {
  public availablePeriods: string[] = [];
  dateTransforme!: any;
  public errormessage!: string;

  constructor(private servicesRepo: AnalysePortfeuilleServicesService) {}

  ngOnInit(): void {
    this.availablePeriods = this.handelGetAllReportDate();
    console.log("aaa : " + this.availablePeriods);
    this.servicesRepo.availablePeriods = this.availablePeriods;
    console.log("avb " + this.availablePeriods);
  }

  handelGetAllReportDate() {
    var datePipe = new DatePipe("en-US");
    this.servicesRepo.getPeriode(2019 + "-12-31", 2019 + 1).subscribe({
      next: (dataPeriods) => {
        for (let i = 0; i < dataPeriods.length; i++) {
          const a1 = {} as AllSelected;
          a1.datereporte = dataPeriods[i];
          a1.checked = false;
          a1.id = i;
          //console.log("date  ", a1.datereporte);
          this.dateTransforme = datePipe.transform(
            a1.datereporte,
            "yyyy-MM-dd"
          );
          console.log("avail " + this.dateTransforme);
          this.availablePeriods.push(this.dateTransforme);
        }
        console.log("xxx " + this.availablePeriods);
      },
      error: (err) => {
        this.errormessage = err;
      },
    });
    return this.availablePeriods;
  }
}
