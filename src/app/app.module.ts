import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParenttochildComponent } from '../parenttochild/parenttochild.component';
import { ChildtoparentComponent } from '../childtoparent/childtoparent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ParenttochildComponent, ChildtoparentComponent ],
  bootstrap:    [ AppComponent ],
  // exports: [ParenttochildComponent]
})
export class AppModule { }
