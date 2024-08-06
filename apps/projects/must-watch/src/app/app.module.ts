import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { MustWatchComponent } from './must-watch/must-watch.component';
import { GamesService } from './must-watch/services/games.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MustWatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class MustWatchAppSharedModule {
  static forRoot(): ModuleWithProviders<MustWatchAppSharedModule> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}

// {
//   "status": 200,
//   "time": "2023-11-07T03:01:41.526Z",
//   "games": 100,
//   "skip": 0,
//   "results": [
//       {
//           "summary": "Washington Wizards @ Philadelphia 76ers",
//           "details": {
//               "league": "NBA",
//               "seasonType": "regular",
//               "season": 2023,
//               "conferenceGame": true,
//               "divisionGame": false
//           },
//           "schedule": {
//               "date": "2023-11-07T00:00:00.000Z",
//               "tbaTime": false
//           },
//           "status": "final",
//           "teams": {
//               "away": {
//                   "team": "Washington Wizards",
//                   "location": "Washington",
//                   "mascot": "Wizards",
//                   "abbreviation": "WAS",
//                   "conference": "Eastern",
//                   "division": "Southeast"
//               },
//               "home": {
//                   "team": "Philadelphia 76ers",
//                   "location": "Philadelphia",
//                   "mascot": "76ers",
//                   "abbreviation": "PHI",
//                   "conference": "Eastern",
//                   "division": "Atlantic"
//               }
//           },
//           "lastUpdated": "2023-11-07T02:28:19.614Z",
//           "gameId": 306291,
//           "venue": {
//               "name": "Wells Fargo Center",
//               "neutralSite": false,
//               "city": "Philadelphia",
//               "state": "PA"
//           },
//           "odds": [
//               {
//                   "spread": {
//                       "open": {
//                           "away": 12,
//                           "home": -12,
//                           "awayOdds": -115,
//                           "homeOdds": -110
//                       },
//                       "current": {
//                           "away": 11,
//                           "home": -11,
//                           "awayOdds": -110,
//                           "homeOdds": -110
//                       }
//                   },
//                   "moneyline": {
//                       "open": {
//                           "awayOdds": 488,
//                           "homeOdds": -684
//                       },
//                       "current": {
//                           "awayOdds": 402,
//                           "homeOdds": -579
//                       }
//                   },
//                   "total": {
//                       "open": {
//                           "total": 227.5,
//                           "overOdds": -110,
//                           "underOdds": -115
//                       },
//                       "current": {
//                           "total": 228.5,
//                           "overOdds": -110,
//                           "underOdds": -110
//                       }
//                   },
//                   "openDate": "2023-11-06T03:14:19.430Z",
//                   "lastUpdated": "2023-11-07T00:24:24.248Z"
//               }
//           ],
//           "scoreboard": {
//               "score": {
//                   "away": 128,
//                   "home": 146,
//                   "awayPeriods": [
//                       24,
//                       34,
//                       40,
//                       30
//                   ],
//                   "homePeriods": [
//                       33,
//                       42,
//                       45,
//                       26
//                   ]
//               },
//               "currentPeriod": 4,
//               "periodTimeRemaining": "0:00"
//           }
//       }