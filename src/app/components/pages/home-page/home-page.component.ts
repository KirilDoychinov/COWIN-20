import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loggedUser: string;
  loggedUserRole: string;
  roleNames: Map<string, string>;
  navButtonClasses: string[];
  selectedView: string;
  selectedTabId: number;
  searchInput: string;
  searchedPhrase: string;

  constructor(
    public authenticationService: AuthenticationService) {
    this.loggedUser = this.getUser();
    this.loggedUserRole = this.getRole();
    this.roleNames = new Map();
    this.navButtonClasses = ['active', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive'];
    this.selectedTabId = 0;
    this.selectedView = 'history';
    this.searchInput = '';
    this.searchedPhrase = '';
  }

  ngOnInit() {
    this.initializeRoleNames();
  }

  search() {
    this.searchedPhrase =  this.searchInput;
  }

  changeTab(clickedTabId: number): void {
    this.navButtonClasses[this.selectedTabId] = 'inactive';
    this.selectedTabId = clickedTabId;
    this.navButtonClasses[this.selectedTabId] = 'active';

    if (clickedTabId !== 2 && clickedTabId !== 3) {
      this.selectedView = 'history';
    }
  }

  changeView(clickedView: string): void {
    this.selectedView = clickedView;
    console.log(clickedView);
  }

  getUser(): string {
    return this.authenticationService.getName();
  }

  getRole(): string {
    return this.authenticationService.getRole();
  }

  getRoleName(): string {
    return this.roleNames.get(this.loggedUserRole);
  }

  initializeRoleNames(): void {
    this.roleNames.set('patient', 'Потребител');
    this.roleNames.set('doctor', 'Доктор');
    this.roleNames.set('pharmacist', 'Фармацевт');
    this.roleNames.set('lab technician', 'Лаборант');
  }



}
