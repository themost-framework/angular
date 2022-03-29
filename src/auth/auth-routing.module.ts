import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback.component';
import { LoginComponent } from './login.component';
// MOST Web Framework Codename Zero Gravity Copyright (c) 2017-2022, THEMOST LP All rights reserved
import { LogoutComponent } from './logout.component';

const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

export const authRouterModule = RouterModule.forChild(routes);

@NgModule({
  imports: [authRouterModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
