import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SchedulerComponent } from './scheduler.component'
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins


@NgModule({
  declarations: [
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule
  ],
  exports: [
    SchedulerComponent
  ],
  providers: []
})
export class SchedulerAppModule { }