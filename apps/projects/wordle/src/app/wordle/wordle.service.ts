import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordleService {

  constructor(private http: HttpClient) { }

  getWord(){
    const url = 'https://random-words5.p.rapidapi.com/getRandom?wordLength=5';
    const options = {
	    method: 'GET',
	    headers: {
		  'X-RapidAPI-Key': '244f220674msh41be0771b7485eap152c23jsnad1ac3e6b553',
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
      }
    };
    return this.http.get(url, options);
  }
  
}
