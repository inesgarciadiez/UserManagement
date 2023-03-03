import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() deleteUser!: User;

  constructor(private userService: UsersService,
    private router: Router) {

  }

  async deleteUserId(pId: string | undefined): Promise<void> {
    if (pId !== undefined) {
      try {
        let response = await this.userService.delete(pId);
        if (response) {
          alert('Usuario ' + this.deleteUser.first_name + ' borrado correctamente');
          console.log(response)
          this.router.navigate(['/home'])
        }
      }
      catch (err) {
        console.log(err)
      }
    }
  }
}
