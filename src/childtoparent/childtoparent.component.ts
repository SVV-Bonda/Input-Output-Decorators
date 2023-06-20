import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css'],
})
export class ChildtoparentComponent implements OnInit {
  @Output() childData = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addNewItem(value: string) {
    this.childData.emit(value);
  }
}
