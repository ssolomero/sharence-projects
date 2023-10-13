import { Component, OnInit } from '@angular/core';
import * as SEATING_CHART from './seating-chart.json';

@Component({
  selector: 'app-find-your-table',
  templateUrl: './find-your-table.component.html',
  styleUrls: ['./find-your-table.component.scss']
})
export class FindYourTableComponent implements OnInit {

  seatingChart = SEATING_CHART;
  name = '';
  filteredTables = this.seatingChart.tables;

  constructor() { }

  ngOnInit(): void {

  }

  filter() {
    this.filteredTables = this.seatingChart.tables
      .filter(table => table.names
      .some(name => name.toLowerCase().includes(this.name.toLowerCase())));
  }

}
