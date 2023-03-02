import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  user: User | any;

  formModel: FormGroup;

  constructor(private userServices: UsersService,
    private activateRoute: ActivatedRoute,
    private router: Router) {
    this.formModel = new FormGroup({
      username: new FormControl("", [
        Validators.required
      ]),
      surname: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\S+\@\S+\.[com,es]/)
      ]),
      photo: new FormControl("", [
        Validators.required
      ]),
    })
  }

  ngOnInit() {
    //Capturamos el id de la ruta con activateRoute
    //hacemos una consulta al servicio con id, obtenemos los datos de un usuario

    this.activateRoute.params.subscribe(async (params: any) => {
      let id: string = params.userid;
      let response: any = await this.userServices.getById(id);
      this.user = response
      console.log(this.user)
    })

    const user1 = {
      id: 8,
      username: this.user.first_name,
      surname: this.user.last_name,
      email: this.user.email,
      photo: this.user.image,
    }

    this.formModel = new FormGroup({
      username: new FormControl(user1.username, [
        Validators.required
      ]),
      surname: new FormControl(user1.surname, [
        Validators.required
      ]),
      email: new FormControl(user1.email, [
        Validators.required,
        Validators.pattern(/^\S+\@\S+\.[com,es]/)
      ]),
      photo: new FormControl(user1.photo, [
        Validators.required
      ]),
    })
  }
  getDataForm() {
    console.log(this.formModel.value);
  }

  checkControl(pControlName: string, pError: string): boolean {
    if (this.formModel.get(pControlName)?.hasError(pError) &&
      this.formModel.get(pControlName)?.touched) {
      return true;
    }
    return false;
  }
}
