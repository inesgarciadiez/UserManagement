import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { USERS } from '../db/users.db';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = 'https://peticiones.online/api/users';

  private allUsers: User[] = USERS;

  constructor(private httpClient: HttpClient) {

  }

  getAll(pPage: number = 1): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}?page=${pPage}`))
  }
  getAllUsers(): User[] {
    return this.allUsers;
  }

  getByUrl(pUrl: string): User | any {
    return this.allUsers.find(users => users.name === pUrl);
  }
}
