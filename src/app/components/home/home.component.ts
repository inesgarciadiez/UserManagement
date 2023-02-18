import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string = "";
  image: string = "";

  allUsers: User[] = [];

  ngOnInit(): void {
    //necesito llamar al servicio para traer un listado de alumnos.
    this.allUsers = this.usersService.getAllUsers()
    console.log(this.allUsers);
  }

  constructor(private usersService: UsersService) {


  }

}

