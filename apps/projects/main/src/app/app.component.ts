import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'main';

  loadingScreen = true;

  ngOnInit() {
    setTimeout(() => {
      this.loadingScreen = false;
    }, 3900);
  }
}
