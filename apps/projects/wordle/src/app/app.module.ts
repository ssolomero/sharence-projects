import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordleComponent } from './wordle/wordle.component'
import { WordleDirective } from './wordle/wordle.directive'

@NgModule({
  declarations: [
    AppComponent,
    WordleComponent,
    WordleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class WordleAppSharedModule {
  static forRoot(): ModuleWithProviders<WordleAppSharedModule> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
