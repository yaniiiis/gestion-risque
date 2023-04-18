import { Component, OnInit } from '@angular/core';
import { ScenarioComponent } from '../scenario/scenario.component';
import { Scenario1Component } from '../scenario1/scenario1.component';
import { Scenario2Component } from '../scenario2/scenario2.component';
import { Scenario3Component } from '../scenario3/scenario3.component';
@Component({
  selector: 'app-stress-test-content',
  templateUrl: './stress-test-content.component.html',
  styleUrls: ['./stress-test-content.component.css']
})
export class StressTestContentComponent implements OnInit {

  protected menuItems = [
    {
      menuItem: "Scenario 1",
      path: "scenario1",
      Component: ScenarioComponent,

    },
    {
      menuItem: "Scenario 2",
      path: "scenario2",
      component: ScenarioComponent,
    },
    {
      menuItem: "Scenario 3",
      path: "scenario3",
      component: ScenarioComponent,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
