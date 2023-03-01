import { Injectable } from '@angular/core';
import { USERS } from '../db/users.db';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UpdatesService {

  private allUsers: User[] = USERS;

  constructor() { }

  /*   getById(pId: number): User | undefined {
      return this.allUsers.find(users => users.id === pId);
    } */

  getAllUsers(): User[] {
    return this.allUsers;
  }

  getByUrl(pUrl: string): User | any {
    return this.allUsers.find(users => users.name === pUrl);
  }
}
