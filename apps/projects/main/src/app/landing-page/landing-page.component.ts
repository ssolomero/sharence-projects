import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.set("text.circles__text", { transformOrigin: "50% 50%" });
    gsap.to("text.circles__text", {
      duration: 10,
      ease: "none",
      rotation: "+=360",
      repeat: -1
    });
  }

}
