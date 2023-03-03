import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userProfile!: User | any;

  constructor(private activateRoute: ActivatedRoute,
    private userServices: UsersService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(async (params: any) => {
      let id: string = params.userid;
      let response: any = await this.userServices.getById(id);
      this.userProfile = response
    })

  }

  delete() {
    Swal.fire({
      title: 'Do you want to delete the user ' + this.userProfile.first_name + ' ' + this.userProfile.last_name + '?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'The user ' + this.userProfile.first_name + ' ' + this.userProfile.last_name + ' has been deleted.'
        )
        this.router.navigate(['/home'])
      }
    })
  }

}
