import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-my-input-list-with-checkbox",
  templateUrl: "./my-input-list-with-checkbox.component.html",
  styleUrls: ["./my-input-list-with-checkbox.component.css"],
})
export class MyInputListWithCheckboxComponent implements OnInit {
  constructor() {}

  @Input() hasError: boolean;
  @Input() list: any[];
  @Input() listToDisplay: any[];
  @Input() title: string;
  @Input() inputValue: string;
  @Input() checkedDates: string[];
  @Output() callbackFunction = new EventEmitter<InputWithCheckboxEvent>();

  isListOpen: boolean = false;
  listToFilter: any[];

  ngOnInit(): void {}

  toggleList() {
    this.isListOpen = !this.isListOpen;
  }
  closeList() {
    this.isListOpen = false;
  }

  isItemChecked(item: string): boolean {
    return this.checkedDates.includes(item);
  }

  itemClicked(event: any) {}

  filtering(item: any) {
    this.listToDisplay = this.list.filter((element) =>
      element.toString().toLocaleLowerCase().includes(item.toLocaleLowerCase())
    );
  }

  checkChanged(event: any, item: string) {
    const obj: InputWithCheckboxEvent = { checked: event.checked, item: item };
    this.callbackFunction.emit(obj);
    //  this.inputValue = event;
  }
}

export interface InputWithCheckboxEvent {
  checked: boolean;
  item: string;
}
