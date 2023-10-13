import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { DinnerComponent } from './dinner/dinner.component';
import { FindYourTableComponent } from './find-your-table/find-your-table.component';
import { NavComponent } from './nav/nav.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FormsModule } from '@angular/forms';
import { CeremonyComponent } from './ceremony/ceremony.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    CocktailComponent,
    DinnerComponent,
    FindYourTableComponent,
    NavComponent,
    ActivitiesComponent,
    CeremonyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class WeddingProgramAppSharedModule {
  static forRoot(): ModuleWithProviders<WeddingProgramAppSharedModule> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
