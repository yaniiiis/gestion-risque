import { Component, OnInit } from '@angular/core';
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
      Component: Scenario1Component,
    },
    {
      menuItem: "Scenario 2",
      path: "scenario2",
      component: Scenario2Component,
    },
    {
      menuItem: "Scenario 3",
      path: "scenario3",
      component: Scenario3Component,
    },
  ];





  constructor() { }

  ngOnInit(): void {
  }

}
