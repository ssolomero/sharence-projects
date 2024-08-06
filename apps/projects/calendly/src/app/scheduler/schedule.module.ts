import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SchedulerComponent } from './scheduler.component'
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    FormsModule
  ],
  exports: [
    SchedulerComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SchedulerAppModule { }