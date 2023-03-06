import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User | any;
  title: string = 'Register'
  status: string = "registered"
  msg: string = "";
  type: string = "";

  formModel: FormGroup;

  constructor(private userServices: UsersService,
    private activateRoute: ActivatedRoute,
    private router: Router) {
    this.formModel = new FormGroup({
      first_name: new FormControl("", [
        Validators.required
      ]),
      last_name: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\S+\@\S+\.[com,es]/)
      ]),
      image: new FormControl("", [
        Validators.required
      ]),
    })
  }

  ngOnInit() {
    //Capturamos el id de la ruta con activateRoute
    //hacemos una consulta al servicio con id, obtenemos los datos de un usuario

    this.activateRoute.params.subscribe(async (params: any) => {
      let id: string = params.userid;
      if (id) {
        this.title = 'Update';
        this.status = "updated";
        let response: any = await this.userServices.getById(id);
        const user: User = response

        this.formModel = new FormGroup({
          first_name: new FormControl(user?.first_name, [
            Validators.required
          ]),
          last_name: new FormControl(user?.last_name, [
            Validators.required
          ]),
          email: new FormControl(user?.email, [
            Validators.required,
            Validators.pattern(/^\S+\@\S+\.[com,es]/)
          ]),
          image: new FormControl(user?.image, [
            Validators.required
          ]),
        })
      }
    })

  }

  async getDataForm() {
    let user: User = this.formModel.value;

    if (user.id) {
      let response = await this.userServices.update(user);
    }
    else {
      try {
        let response = await this.userServices.create(user);
        if (response.id) {
          console.log(response)
          Swal.fire(
            `The user ${response.first_name} with id ${response.id} has successfully ${this.status}`
          )
          this.router.navigate(['/home']);
        }
      }
      catch (err) {
        console.log(err)
      }
    }
  }

  checkControl(pControlName: string, pError: string): boolean {
    if (this.formModel.get(pControlName)?.hasError(pError) &&
      this.formModel.get(pControlName)?.touched) {
      return true;
    }
    return false;
  }
}
