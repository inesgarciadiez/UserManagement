import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'user/:url', component: UserComponent },
    { path: 'form', component: FormComponent },
    { path: 'update', component: UpdateComponent },
    { path: '**', component: C404Component }
    /* { path: '', pathMatch: 'full', component: HomeComponent } */
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]

})

export class AppRoutingModule { }