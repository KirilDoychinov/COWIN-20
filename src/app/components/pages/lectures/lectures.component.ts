import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {

  loggedUser: string;
  loggedUserRole: string;
  roleNames: Map<string, string>;
  navButtonClasses: string[];
  selectedView: string;
  selectedTabId: number;
  searchInput: string;
  searchedPhrase: string;

  constructor() {
    this.selectedTabId = 0;
  }

  ngOnInit() {
  }

  search() {
    this.searchedPhrase =  this.searchInput;
  }

  changeTab(clickedTabId: number): void {

    this.selectedTabId = this.selectedTabId + clickedTabId;
  }
  
}
