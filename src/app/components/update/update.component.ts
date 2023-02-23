import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  formModel: FormGroup;

  constructor() {
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
