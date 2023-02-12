// MOST Web Framework Codename Zero Gravity Copyright (c) 2017-2022, THEMOST LP All rights reserved
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthConfiguration, AUTH_CONFIG } from './auth.interfaces';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { CallbackComponent } from './callback.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { ActivatedUserService } from './activated-user.service';
import { MostModule } from '../module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MostModule,
    AuthRoutingModule,
  ],
  declarations: [CallbackComponent, LoginComponent, LogoutComponent],
  exports: [
  ]
})
export class AuthModule {
  static forRoot(config: AuthConfiguration): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: AUTH_CONFIG,
          useValue: config
      },
        ActivatedUserService,
        AuthGuard,
        AuthService
      ]
    };
  }
}
