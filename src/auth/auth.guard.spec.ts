import { inject, TestBed } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MostModule } from '../module';
import { ActivatedUserService } from './activated-user.service';
import { AUTH_CONFIG } from './auth.interfaces';
import { AuthModule } from './auth.module';
export const routes: Routes = [];
describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MostModule.forRoot({
          base: '/',
          options: {
            useMediaTypeExtensions: true
          }
        }),
        AuthModule.forRoot({
          login: '/auth/login',
          callback: '/auth/callback',
          locations: [],
          client_id: null,
          scope: []
        })
      ]
    });
  });

  it('should get AuthGuard', () => {
    const activatedUserService = TestBed.inject(ActivatedUserService);
  });
});
