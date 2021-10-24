import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedUserService } from './activated-user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private activatedUser: ActivatedUserService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.activatedUser.snapshot.user != null;
  }
}
