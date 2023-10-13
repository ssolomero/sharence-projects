import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navItems = [
    {
      title: 'drinks',
      route: '/wedding/cocktail',
    },
    {
      title: 'table no.',
      route: '/wedding/seating-chart',
    },
    {
      title: 'din din',
      route: '/wedding/menu',
    },
    {
      title: 'festivities',
      route: '/wedding/activities'
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
