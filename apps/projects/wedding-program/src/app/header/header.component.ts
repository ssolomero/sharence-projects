import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMenu = false;

  constructor(private router: Router) {
    router.events.subscribe((val:any) => {
      // see also 
      if(val instanceof NavigationEnd) {
        this.showMenu = val.url != '/wedding';
      }
    });
  }

  ngOnInit(): void {
  }

}
