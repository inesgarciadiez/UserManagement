import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userProfile: User | any;

  constructor(private activateRoute: ActivatedRoute,
    private userServices: UsersService) {
  }

  ngOnInit(): void {
    //necesito llamar al servicio para traer un listado de alumnos.
    this.activateRoute.params.subscribe((params: any) => {
      let url = params.url;
      this.userProfile = this.userServices.getByUrl(url);
    })

  }

}
