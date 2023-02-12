// MOST Web Framework Codename Zero Gravity Copyright (c) 2017-2022, THEMOST LP All rights reserved
import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppLocation, AppLocationMask, AppLocationPattern } from './auth.interfaces';
import { ActivatedUserService } from './activated-user.service';
import { AuthConfiguration, AUTH_CONFIG } from './auth.interfaces';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  public locations: AppLocationPattern[] = [];

  constructor(private activatedUser: ActivatedUserService,
    private router: Router,
    @Inject(AUTH_CONFIG) config: AuthConfiguration) {
    const locations: AppLocation[] = config.locations || [];
    this.locations = locations.map((location: AppLocation) => {
      if (location.path != null) {
        Object.assign(location, {
          pattern: new RegExp(location.path, 'i')
        });
      }
      return location;
    });
  }

  public canActivateLocation(path: string, user: any): AppLocation {
    let accounts = [];
    if (this.locations && this.locations.length === 0) {
      const mask = 1;
      return {
        path,
        mask
      }
    }
    if (user && user.groups) {
      accounts = user.groups.map((x: any) => {
        return x.name;
      });
    }
    if (user && user.name) {
      accounts.push(user.name);
    }
    // add wilcard
    accounts.push('*');
    return this.locations.find((location: AppLocationPattern) => {
      return location.pattern.test(path)
        && (accounts.indexOf(location.account) >= 0)
        // tslint:disable-next-line: no-bitwise
        && (location.mask === 0 || ((location.mask & 1) === 1))
        && user;
    });
  }

  private _canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const activatedLocation = this.canActivateLocation(state.url, this.activatedUser.snapshot.user);
      let result = false;
      if (activatedLocation != null) {
        result = activatedLocation.mask === AppLocationMask.Allow;
        if (result === false && activatedLocation.redirectTo) {
          this.router.navigateByUrl(activatedLocation.redirectTo);
          return result;
        }
      }
      return result;
    }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._canActivate(next, state);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._canActivate(childRoute, state);
  }
}
