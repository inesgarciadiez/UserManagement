import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UpdatesService } from 'src/app/services/updates.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  user: User | any;

  formModel: FormGroup;

  constructor(private updateServices: UpdatesService,
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

    this.activateRoute.params.subscribe((params: any) => {
      let url = params.url;
      this.user = this.updateServices.getByUrl(url);
    })

    /*     this.activateRoute.params.subscribe((params: any) => {
          let id = Number(params.id);
          console.log(params.id);
    
          let response = this.updateServices.getById(id);
          if (response) {
            this.user = response;
            console.log(this.user)
          }
          else {
            alert('Este cliente no existe');
            this.router.navigate(['/home']);
          }
        }) */

    const user1 = {
      id: 8,
      username: this.user.name,
      surname: this.user.surname,
      email: this.user.email,
      photo: this.user.photo,
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
