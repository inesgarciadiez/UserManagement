import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allUsers: User[] = [];

  async ngOnInit(): Promise<void> {
    //necesito llamar al servicio para traer un listado de users.
    //let response = await this.usersService.getAll()
    let response = await this.usersService.getAllUsers()
    this.allUsers = response/* .results */
    console.log(this.allUsers)
  }

  constructor(private usersService: UsersService) {

  }

}

