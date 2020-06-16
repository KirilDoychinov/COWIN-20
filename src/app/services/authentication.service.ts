import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  updateUser(name: string, role: string) {
    localStorage.setItem('user', name);
    localStorage.setItem('role', role);
  }

  getName(): string {
    return localStorage.getItem('user');
  }

  getRole(): string {
    return localStorage.getItem('role');
  }

}
