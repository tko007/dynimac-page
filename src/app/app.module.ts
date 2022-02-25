import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SelectComponent} from '../components/SelectComponent';
import {FormElement} from '../components/FormElement';
import 'reflect-metadata';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    FormElement
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  /**
   * An entry component is any component that Angular loads imperatively,
   * (which means you’re not referencing it in the template), by type.
   * You specify an entry component by bootstrapping it in an NgModule,
   * or including it in a routing definition.
   */
  entryComponents: [SelectComponent]
})
export class AppModule { }
