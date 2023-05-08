import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { element } from "protractor";

@Component({
  selector: "app-my-input-list",
  templateUrl: "./my-input-list.component.html",
  styleUrls: ["./my-input-list.component.css"],
})
export class MyInputListComponent implements OnInit {
  constructor() {}

  // @Input() callbackFunction: (args: any) => any;
  @Input() hasError: boolean;
  @Input() list: any[];
  @Input() listToDisplay: any[];
  @Input() title: string;
  @Output() callbackFunction = new EventEmitter<string>();

  isListOpen: boolean = false;
  inputValue: string;
  listToFilter: any[];

  ngOnInit(): void {}

  toggleList() {
    this.isListOpen = !this.isListOpen;
  }
  closeList() {
    this.isListOpen = false;
  }

  itemClicked(event: any) {
    this.callbackFunction.emit(event);
    this.inputValue = event;
  }

  filtering(item: any) {
    this.listToDisplay = this.list.filter((element) =>
      element.toString().toLocaleLowerCase().includes(item.toLocaleLowerCase())
    );
  }
}
