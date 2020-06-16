import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    { username: 'kiril97', password: 'qwerty', role: 'patient', name: 'Кирил Дойчинов', email: 'kirild@abv.bg' },
    { username: 'stefan97', password: 'qwerty', role: 'doctor', name: 'Стефан Николов', email: 'stef4o@abv.bg' },
    { username: 'iveta97', password: 'qwerty', role: 'pharmacist', name: 'Ивета Младенова', email: 'ivetka@gmail.com' },
    { username: 'vasilena97', password: 'qwerty', role: 'lab technician', name: 'Василена Калудова', email: 'vasito@yahoo.com' },
  ];

  patientDiseases = new Map()
    .set('kiril97', {});

  checkUsernameIsFree(username: string): boolean {
    for (const user of this.users) {
      if (user.username === username) {
        return false;
      }
    }
    return true;
  }


  findUser(username: string): User {
    for (const user of this.users) {
      if (user.username === username) {
        return user;
      }
    }
    return null;
  }

  addUser(newUser: User, diseases: string[]) {
    this.users.push(newUser);
    if (newUser.role === 'patient') {
      this.patientDiseases.set(newUser.username, diseases);
    }
  }

}
