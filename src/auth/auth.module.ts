import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { AuthConfiguration, AuthService, AUTH_CONFIG } from './auth.service';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { CallbackComponent } from './callback.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { ActivatedUserService, ActivatedUserSnapshot } from './activated-user.service';
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
        AuthGuard,
        AuthService,
        ActivatedUserSnapshot,
        ActivatedUserService,
      ]
    };
  }
}
