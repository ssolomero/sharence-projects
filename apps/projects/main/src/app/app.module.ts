import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins

// Sub Applications
import { WordleAppSharedModule } from '../../../wordle/src/app/app.module';
import { CalendlyAppSharedModule } from '../../../calendly/src/app/app.module';
import { LandingPageComponent } from './landing-page/landing-page.component'


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    WordleAppSharedModule.forRoot(),
    CalendlyAppSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
