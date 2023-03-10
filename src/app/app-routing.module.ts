import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'user/:userid', component: UserComponent },
    { path: 'new', component: FormComponent },
    { path: 'form/:userid', component: FormComponent },
    { path: '**', component: C404Component },
    /* { path: '', pathMatch: 'full', component: HomeComponent } */
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]

})

export class AppRoutingModule { }