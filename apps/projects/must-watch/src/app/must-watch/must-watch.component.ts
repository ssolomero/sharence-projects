import { Component, OnInit } from '@angular/core';
import { GamesService } from './services/games.service';
import { take, debounceTime, delay } from 'rxjs/operators';
import { LEAGUE_SETTINGS } from './league-settings';

@Component({
  selector: 'app-must-watch',
  templateUrl: './must-watch.component.html',
  styleUrls: ['./must-watch.component.scss']
})
export class MustWatchComponent implements OnInit {

  games:any;
  hasCloseGames = false;
  loaded = false;
  descriptionTxt = '';
  leagueSettings = LEAGUE_SETTINGS;

  gamesToShow = [] as any;
  downToWireGames = [] as any;
  closeGames = [] as any;
  
  mockGames = [
    {
      teams: {
        away:{
          location: 'Golden State',
          mascot: 'Warriors'
        },
        home: {
          location: 'Atlanta',
          mascot: 'Hawks'
        }
      },
      details: {
        league: 'NBA'
      },
      scoreboard: {
        score: {
          home: '99',
          away: '98'
        },
        currentPeriod: 4,
        periodTimeRemaining: '4:20'
      }
    },
    {
      teams: {
        away:{
          location: 'New England',
          mascot: 'Patriots'
        },
        home: {
          location: 'Atlanta',
          mascot: 'Falcons'
        }
      },
      details: {
        league: 'NFL'
      },
      scoreboard: {
        score: {
          home: '28',
          away: '9'
        },
        currentPeriod: 4,
        periodTimeRemaining: '15:00'
      }
    },
    {
      teams: {
        away:{
          location: 'Los Angeles',
          mascot: 'Dodgers'
        },
        home: {
          location: 'Atlanta',
          mascot: 'Braves'
        }
      },
      details: {
        league: 'MLB'
      },
      scoreboard: {
        score: {
          home: '3',
          away: '2'
        },
        currentPeriod: 9,
        periodTimeRemaining: 'Top'
      }
    }
  ] as any;

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    // this.gamesToShow = this.mockGames;
    // this.loaded = true;
    this.gamesService.getGames().pipe(take(1), delay(2000))
      .subscribe((data:any) => {
        this.games = data.results;

        this.games.forEach((game:any) => {
          // Close & Coming down to wire
          if (
            game.status === 'in progress' &&
            game.scoreboard.currentPeriod >= LEAGUE_SETTINGS[game.details.league]?.lastPeriod &&
            Math.abs(game.scoreboard.score.home - game.scoreboard.score.away) <= LEAGUE_SETTINGS[game.details.league]?.possesion
          ) {
            this.downToWireGames.push(game);
            this.hasCloseGames = true;
          }
          // Close games but a lot of time left
          if (
            game.status === 'in progress' &&
            Math.abs(game.scoreboard.score.home - game.scoreboard.score.away) <= LEAGUE_SETTINGS[game.details.league]?.possesion
          ) {
            this.closeGames.push(game);
            this.hasCloseGames = true;
          }
        });

        if (this.downToWireGames.length >= 1) {
          this.gamesToShow = this.downToWireGames;
          this.descriptionTxt = 'see what games are coming down to the wire';
        } else if (this.closeGames.length >= 1) {
          this.gamesToShow = this.closeGames;
          this.descriptionTxt = 'close games, but a lot of time left';
        } else {
          this.gamesToShow = this.mockGames;
        }

        this.loaded = true;
      });
    }

  // Filter data - prioritize by crunch time
  // In progress, final quarter, score/possesion difference

}
