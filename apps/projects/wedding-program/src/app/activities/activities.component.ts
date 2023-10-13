import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from './activities.content'

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activities = ACTIVITIES;

  constructor() { }

  ngOnInit(): void {
  }

}
