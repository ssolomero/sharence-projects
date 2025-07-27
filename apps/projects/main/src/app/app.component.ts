import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'main';


  ngOnInit() {
    // setTimeout(() => {
    //   this.loadingScreen = false;
    // }, 2000);
  }
}
