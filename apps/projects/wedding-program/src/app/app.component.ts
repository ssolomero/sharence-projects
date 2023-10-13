import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solo-no-more';

  showMenu = false;

  constructor(private router: Router) {
    router.events.subscribe((val:any) => {
        // see also 
        if(val instanceof NavigationEnd) {
          this.showMenu = val.url != '/';
        }
    });
  }
}
