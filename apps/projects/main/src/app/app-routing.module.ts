import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Sub Applications
import { WordleAppSharedModule } from '../../../wordle/src/app/app.module';
import { CalendlyAppSharedModule } from 'projects/calendly/src/app/app.module';
import { WeddingProgramAppSharedModule } from 'projects/wedding-program/src/app/app.module';
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
    WeddingProgramAppSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
