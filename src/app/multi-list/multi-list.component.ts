import { Component, OnInit, Input } from "@angular/core";
import { ValueItem } from "../model";

@Component({
  selector: "ul[en8-multi-list]",
  templateUrl: "./multi-list.component.html",
  styleUrls: ["./multi-list.component.css"]
})
export class MultiListComponent implements OnInit {
    @Input() valueList: Array<ValueItem> = [];
    @Input() level = 0;

    newEntry = '';
    duplicateError = false;

    constructor() {}

    ngOnInit() {}

    addItem() {
        if (
            !this.newEntry ||
            this.valueList.find(x => x.value === this.newEntry && !x.removed)
        ) {
            this.duplicateError = !this.newEntry ? false : true;
            return;
        }
          this.valueList.push(new ValueItem(this.newEntry));
        this.newEntry = '';
        this.duplicateError = false;
    }

    removeItem(item: ValueItem) {
        item.removed = true;
        // item.value = '';
        item.childs = [];
    }

    toggleChild(item) {
      if (this.level > 1) {
        return
      }
      item.showChilds = !item.showChilds;
    }
}