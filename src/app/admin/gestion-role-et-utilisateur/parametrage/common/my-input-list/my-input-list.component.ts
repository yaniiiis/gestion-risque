import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { element } from "protractor";

@Component({
  selector: "app-my-input-list",
  templateUrl: "./my-input-list.component.html",
  styleUrls: ["./my-input-list.component.css"],
})
export class MyInputListComponent implements OnInit {
  constructor() {}

  @Input() callbackFunction: (args: any) => void;
  @Input() hasError: boolean;
  @Input() list: any[];
  @Input() title: string;

  isListOpen: boolean = false;
  inputValue: string;
  listToFilter: any[];

  ngOnInit(): void {
    this.listToFilter = this.list;
  }

  toggleList() {
    this.isListOpen = !this.isListOpen;
  }
  closeList() {
    this.isListOpen = false;
  }

  itemClicked(event: any) {
    this.callbackFunction(event);
    this.inputValue = event;
  }

  filtering(item: any) {
    this.list = this.listToFilter.filter((element) =>
      element.toString().includes(item)
    );
  }
}
