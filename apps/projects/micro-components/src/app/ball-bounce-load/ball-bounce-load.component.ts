import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-ball-bounce-load',
  templateUrl: './ball-bounce-load.component.html',
  styleUrls: ['./ball-bounce-load.component.scss']
})
export class BallBounceLoadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Bounce up animation
	  const bounceUp = anime({
		autoplay: false,
		targets: '#bball',
		translateY: [300, 0],
		duration: 1000,
    easing: 'easeOutQuad',
		complete: () => {
			bounceDown.play();
		},
	});

	// Bounce down animation
	const bounceDown = anime({
		autoplay: true,
		targets: '#bball',
		translateY: [0, 300],
		duration: 1000,
    easing: 'easeInQuad',
		complete: () => {
			bounceUp.play();
		},
  });
  
  const shadowAnimeUp = anime({
    targets: '#shadow',
    duration: 1000,
    easing: 'easeInQuad',
    scale: [0.3, 0.8],
    opacity: [1, .25],
    complete: () => {shadowAnimeDown.play()}
  });

  const shadowAnimeDown = anime({
    targets: '#shadow',
    duration: 1000,
    easing: 'easeInQuad',
    scale: [0.8, 0.3],
    opacity: [.25, 1],
    complete: () => {shadowAnimeUp.play()}
  });

  const textAnimeLoad = anime({
    targets: '#load-text',
    opacity: [.25, 1],
    duration: 1000,
    easing: 'easeInQuad',
    complete: () => {textAnimeReverse.play()}
  });

  const textAnimeReverse = anime({
    targets: '#load-text',
    opacity: [1, .25],
    duration: 1000,
    easing: 'easeInQuad',
    complete: () => {textAnimeLoad.play()}
  });

	// Start the animation
  bounceDown.play();
  shadowAnimeDown.play();
  textAnimeLoad.play();
  }

}
