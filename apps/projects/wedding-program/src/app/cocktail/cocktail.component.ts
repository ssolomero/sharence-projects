import { Component, OnInit } from '@angular/core';
import { SignatureCocktails, OtherDrinks } from './cocktail-content';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  sigCocks = SignatureCocktails;
  otherDrinks = OtherDrinks;

  constructor() { }

  ngOnInit(): void {
  }

}
