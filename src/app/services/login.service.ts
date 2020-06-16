import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../User';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private userService: UserService) {
  }

  public getUser(username: string): string {
    return this.userService.findUser(username).name;
  }

  public getRole(username: string): string {
    return this.userService.findUser(username).role;
  }

  public login(username: string, password: string): string {
    let responseMessage = 'OK';

    const currentUser: User = this.userService.findUser(username);
    if (isNull(currentUser)) {
      responseMessage = 'User does not exist!';
    } else if (password !== currentUser.password) {
      responseMessage = 'Wrong password!';
    }

    return responseMessage;
  }

}
