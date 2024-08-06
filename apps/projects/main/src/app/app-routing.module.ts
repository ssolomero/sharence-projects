import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Sub Applications
import { WordleAppSharedModule } from 'projects/wordle/src/app/app.module';
import { CalendlyAppSharedModule } from 'projects/calendly/src/app/app.module';
import { WeddingProgramAppSharedModule } from 'projects/wedding-program/src/app/app.module';
import { MustWatchAppSharedModule } from 'projects/must-watch/src/app/app.module'
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'wordle',
    loadChildren: () => import('../../../wordle/src/app/app.module').then(x => x.WordleAppSharedModule)
  },
  {
    path: 'calendly',
    loadChildren: () => import('../../../calendly/src/app/app.module').then(x => x.CalendlyAppSharedModule)
  },
  {
    path: 'wedding',
    loadChildren: () => import('../../../wedding-program/src/app/app.module').then(x => x.WeddingProgramAppSharedModule)
  },
  {
    path: 'must-watch',
    loadChildren: () => import('../../../must-watch/src/app/app.module').then(x => x.MustWatchAppSharedModule)
  },
  {
    path: '',
    component: LandingPageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    ),
    WordleAppSharedModule.forRoot(),
    CalendlyAppSharedModule.forRoot(),
    WeddingProgramAppSharedModule.forRoot(),
    MustWatchAppSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
