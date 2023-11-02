import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked} from '@angular/core';
import {WORDLES} from './worlde.config';

@Component({
  selector: 'app-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.scss'],
})
export class WordleComponent implements OnInit, AfterViewChecked{

  @ViewChild('popup') popup!: ElementRef;
  @ViewChild('snackbar') snackbar!: ElementRef;

  numOfLetters: number = 5; //letter word
  numOfGuesses: number = 6; //amount of tries
  numOfAttempts: number = 0; //attempts taken
  wordleIndex: number = Math.floor(Math.random()*WORDLES.length);
  wordle:string = WORDLES[this.wordleIndex];
  guessedWord: string = '';
  // wordle:string = 'FLEET';

  wordleArr: string[] = [...this.wordle];
  guessArr: string[] = [];
  guessesStr: string = 'ocWordle #'+this.wordleIndex;

  toast: string = 'end game';
  endGame: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.numOfAttempts = 0;
    console.log(this.wordle);
  }

  ngAfterViewChecked() {
    const el = document.getElementById('letter00');
    el?.focus();
  }

  async onGuess(){

    let numCorrect = 0;
    let inputs = document.getElementsByClassName('attempt-row-'+this.numOfAttempts);
    let statesArr:any = []; //value, state
    this.guessesStr += '\n'; //String to share
    this.guessedWord = '';

    // Compare guess to wordle and set states
    for (let i = 0; i < this.numOfLetters; i++) {
      let guess = inputs[i] as HTMLInputElement;
      if (guess.value == this.wordleArr[i]) {
        numCorrect++;
        statesArr.push({state: 'correct'});
        if (numCorrect == this.numOfLetters) {
          this.onEndGame();
        }
      } else if (this.wordleArr.includes(guess.value)) {
        statesArr.push({state: 'close'});
      } else {
        statesArr.push({state: 'wrong'});
      }
      this.guessedWord += guess.value;
    }

    // Update states based on duplicates
    this.checkForDuplicates(statesArr, this.guessedWord);

    // Set css 
    for (let i = 0; i < this.numOfLetters; i++) {
      let guess = inputs[i] as HTMLInputElement;
      setTimeout(() => {
        guess.classList.add(statesArr[i].state);
      }, 350 * i)
      switch(statesArr[i].state) { 
        case 'correct': { 
          this.guessesStr += '🟦 ';
           break; 
        } 
        case 'close': { 
          this.guessesStr += '🟧 ';
           break; 
        } 
        default: { 
          this.guessesStr += '⬜ ';
           break; 
        } 
     } 
     guess.classList.add('filled');

    }

    // Focus on next row after guessing
    if (this.numOfAttempts < this.numOfGuesses) {
      let nextInput = document.getElementsByClassName('attempt-row-'+(this.numOfAttempts+1))[0] as HTMLInputElement;
      let currentInput = document.getElementsByClassName('attempt-row-'+this.numOfAttempts)[this.numOfLetters-1] as HTMLInputElement;
      if (nextInput && !this.endGame) {
        nextInput.disabled =false;
        nextInput.focus();
      }
      currentInput.disabled = true;
      this.numOfAttempts++;
    } 

    if (this.numOfAttempts >= this.numOfGuesses) {
      this.onEndGame();
    }

    numCorrect = 0;

  }

  onEndGame() {
    setTimeout(()=> {
      this.showToast();
    }, 2000);
    this.endGame = true;
    let popup = this.popup.nativeElement;
    setTimeout(() => { 
      popup.style.visibility = 'visible';
    }, 4000);
  }

  onKeyPress(event: KeyboardEvent, letterNum: number) {
    // Backspace/Delete Key
    if (event.keyCode == 8) {
      let attemptRow = document.getElementsByClassName('attempt-row-'+this.numOfAttempts);
      let prevElem;
      let currentElem = event.target as HTMLInputElement;
      if (letterNum >= this.numOfLetters-1 && currentElem.value != '') {
        prevElem = attemptRow[letterNum] as HTMLInputElement;
      } else {
        prevElem = attemptRow[letterNum-1] as HTMLInputElement;
        if (prevElem != undefined) {
          prevElem.disabled = false;
          prevElem.value = '';
          prevElem?.focus();
          currentElem.disabled = true;
        }
      }
    }

    // Enter/Return Key
    if (event.keyCode == 13) {
      // Check to see if last letter is filled
      let input = document.getElementsByClassName('attempt-row-'+this.numOfAttempts)[this.numOfLetters-1] as HTMLInputElement;
      if (input.value) {
        this.onGuess();
      }
    }
  }

  showToast() {
    let elem = this.snackbar.nativeElement;

    if (elem) {
      if (this.numOfAttempts == 1) { this.toast = 'sheeshhh'} 
        else if (this.numOfAttempts == 2) { this.toast = 'nice work'}
        else if (this.numOfAttempts == 3) { this.toast = 'not bad'}
        else if (this.numOfAttempts == 4) { this.toast = 'not dumb'}
        else if (this.numOfAttempts == 5) { this.toast = 'oof'}
        else  { this.toast = 'awful'}

      elem.className = "show";
      setTimeout(() => { elem!.className = elem!.className.replace("show", ""); }, 3000);
    } 
  }

  shareScore() {
    navigator.clipboard.writeText(this.guessesStr);
    location.reload();
  }

  checkForDuplicates(inputs:any, word:string) {
    let wordArr = [...word];
    let temp = [...word];
    wordArr.forEach((letter:any, i: number) => {
      if (inputs[i].state == 'close') {
        let currentInd = 0;
        temp[i] = '';
        while (temp.includes(letter)) {
          currentInd = temp.indexOf(letter);
          if (inputs[currentInd].state == 'correct') {
            inputs[i].state = 'wrong';
          }
          
          temp[currentInd] = '';
        }
      }
      temp = [...word]; 
    });
  }
}
