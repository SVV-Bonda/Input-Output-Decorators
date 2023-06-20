import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  parentData="Parent to Child Data";
  childDataIs = '';

  getData(newItem: string) {
    this.childDataIs = newItem;
  }
}
