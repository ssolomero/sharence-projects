import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulerAppModule } from './scheduler/schedule.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SchedulerAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class CalendlyAppSharedModule {
  static forRoot(): ModuleWithProviders<CalendlyAppSharedModule> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}