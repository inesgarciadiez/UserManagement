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

  getByUrl(pUrl: string): User | any {
    console.log(pUrl);
    return this.allUsers.find(users => users.name === pUrl);
  }
}
