import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input() miUser!: User;
  delUser: User | any;

  constructor(private userService: UsersService,
    private router: Router) {

  }

  async delete(userId: string | undefined): Promise<void> {
    if (userId !== undefined) {
      let response = await this.userService.delete(userId);
      this.delUser = response
      console.log(response)

      Swal.fire({
        title: 'Do you want to delete the user ' + this.delUser.first_name + ' ' + this.delUser.last_name + '?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'The user ' + this.delUser.first_name + ' ' + this.delUser.last_name + '  has been deleted.'
          )
          this.router.navigate(['/home'])
        }
      })
    }
  }

}
