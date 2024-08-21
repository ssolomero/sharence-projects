import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins

// Sub Applications
import { WordleAppSharedModule } from '../../../wordle/src/app/app.module';
import { CalendlyAppSharedModule } from '../../../calendly/src/app/app.module';
import { MustWatchAppSharedModule } from '../../../must-watch/src/app/app.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BallBounceLoadComponent } from '../../../micro-components/src/app/ball-bounce-load/ball-bounce-load.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BallBounceLoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    WordleAppSharedModule.forRoot(),
    CalendlyAppSharedModule.forRoot(),
    MustWatchAppSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
