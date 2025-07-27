import { Component, OnInit } from '@angular/core';
import { PROJECT_DESCRIPTIONS } from '../CMS';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  projects = PROJECT_DESCRIPTIONS;

  constructor() { }

  ngOnInit(): void {
    
  }

}
