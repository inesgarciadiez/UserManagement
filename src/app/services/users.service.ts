import { Injectable } from '@angular/core';
import { USERS } from '../db/users.db';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private allUsers: User[] = USERS;

  constructor() {

  }

  getAllUsers(): User[] {
    return this.allUsers;
  }

  getPositionUser(): any {
    console.log(this.allUsers.at(1)?.name);
    return this.allUsers.at(1)?.name;
  }
}
