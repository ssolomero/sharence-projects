import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  LEAGUE_SETTINGS = [
    {
      name: 'NFL',
      lastPeriod: 4,
      possesion: 7
    },
    {
      name: 'NBA',
      lastPeriod: 4,
      possesion: 5
    },
    {
      name: 'NHL',
      lastPeriod: 3,
      possesion: 1
    },
    {
      name: 'MLB',
      lastPeriod: 9,
      possesion: 1
    },
    {
      name: 'NCAAB',
      lastPeriod: 4,
      possesion: 5
    }
  ];


  constructor(private http: HttpClient) {}

  getGames() {
    let results: any = [];
    const url = 'https://sportspage-feeds.p.rapidapi.com/games';
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '244f220674msh41be0771b7485eap152c23jsnad1ac3e6b553',
		    'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
	    }
    };

    return this.http.get(url, options);
  }
}
