import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  allUsers: User[] = [];

  ngOnInit(): void {
    //necesito llamar al servicio para traer un listado de alumnos.
    this.allUsers = this.usersService.getAllUsers()
    console.log(this.allUsers);
    this.getUser();
  }

  getUser() {
    this.usersService.getPositionUser();
  }

  constructor(private usersService: UsersService) {


  }

}
