import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ActivatedUserService } from './activated-user.service';
import { Router } from '@angular/router';
import { AngularDataContext } from '../client';
import { AuthConfiguration, AUTH_CONFIG } from './auth.interfaces';

@Injectable()
export class AuthService {

  private configuration: AuthConfiguration;

  constructor(@Inject(AUTH_CONFIG) config: AuthConfiguration,
    private activatedUser: ActivatedUserService,
    private router: Router,
    private context: AngularDataContext) {
    this.configuration = config;
  }
  login(redirect?: string): void {
    // build login uri
    const client_id = this.configuration.client_id;
    const scope = this.configuration.scope.join(',');
    const redirect_uri = redirect || this.configuration.callback;
    window.location.href = `${this.configuration.login}?client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`;
  }

  logout() {
    this.activatedUser.set({
      name: 'anonymous'
    });
    this.context.setBearerAuthorization(null);
    if (this.configuration.logout) {
      window.location.href = this.configuration.logout;
    } else {
      return this.router.navigate(['/']);
    }
  }

}
