import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { DinnerComponent } from './dinner/dinner.component';
import { FindYourTableComponent } from './find-your-table/find-your-table.component';
import { NavComponent } from './nav/nav.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CeremonyComponent } from './ceremony/ceremony.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'wedding', component: AppComponent},
  { path: 'wedding/menu', component: DinnerComponent},
  { path: 'wedding/seating-chart', component: FindYourTableComponent},
  { path: 'wedding/activities', component: ActivitiesComponent},
  { path: 'wedding/cocktail', component: CocktailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
