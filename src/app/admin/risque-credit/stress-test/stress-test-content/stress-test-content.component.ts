import { Component, OnInit } from '@angular/core';
import {StressTestCinquanteComponent} from '../stress-test-cinquante/stress-test-cinquante.component';
import { StressTestDeuxCentComponent } from '../stress-test-deux-cent/stress-test-deux-cent.component';
import { StressTestCentComponent } from '../stress-test-cent/stress-test-cent.component';
@Component({
  selector: 'app-stress-test-content',
  templateUrl: './stress-test-content.component.html',
  styleUrls: ['./stress-test-content.component.css']
})
export class StressTestContentComponent implements OnInit {

  protected menuItems = [
    {
      menuItem: "Variation de 50%",
      path: "StressTestCinquante",
      Component: StressTestCinquanteComponent,
    },
    {
      menuItem: "Variation de 100% ",
      path: "StressTestCent",
      component: StressTestCentComponent,
    },
    {
      menuItem: "Variation de 200%  ",
      path: "StressTestDeuxCent",
      component: StressTestDeuxCentComponent,
    },
  ];





  constructor() { }

  ngOnInit(): void {
  }

}
