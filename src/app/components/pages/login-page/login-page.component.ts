import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { RecoveryLoginDialogComponent } from '../../dialogs/recovery-login-dialog/recovery-login-dialog.component';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  selectedTabId: number;
  username: string;
  password: string;
  navButtonClasses: string[];

  constructor(
    private loginService: LoginService,
    private router: Router,
    public dialog: MatDialog,
    public authenticationService: AuthenticationService) {
    this.selectedTabId = 0;
    this.username = '';
    this.password = '';
    this.navButtonClasses = ['active', 'inactive', 'inactive', 'inactive'];
  }

  ngOnInit() {
    this.initializeSession();
  }

  initializeSession(): void {
    localStorage.setItem('user', null);
    localStorage.setItem('role', null);
  }

  changeTab(clickedTabId: number): void {
    this.navButtonClasses[this.selectedTabId] = 'inactive';
    this.selectedTabId = clickedTabId;
    this.navButtonClasses[this.selectedTabId] = 'active';
  }

  login(): void {
    const response: string = this.loginService.login(this.username, this.password);
    if (response === 'OK') {
      const loggedUser = this.loginService.getUser(this.username);
      const loggedUserRole = this.loginService.getRole(this.username);
      this.authenticationService.updateUser(loggedUser, loggedUserRole);

      this.router.navigateByUrl('/home');
    } else {
      console.log(response);
    }
  }

  openModal() {
    console.log('YESS');
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '320px';
    dialogConfig.width = '400px';
    dialogConfig.data = {
      recoveryEmail: 'example@gmail.com'
    };

    const dialogRef = this.dialog.open(RecoveryLoginDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data !== undefined) {
          console.log('Email sent to: ' + data);
        }
      });
  }
}


