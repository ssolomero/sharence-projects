import { Component, OnInit } from '@angular/core';
import { MENU } from './dinner.content';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent implements OnInit {

  menu = MENU;

  constructor() { }

  ngOnInit(): void {
  }

}
