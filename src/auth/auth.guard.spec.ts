import { TestBed, async, inject } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MostModule } from '../module';
import { ActivatedUserService, ActivatedUserSnapshot } from './activated-user.service';

import { AuthGuard } from './auth.guard';
import { AUTH_CONFIG } from './auth.interfaces';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MostModule.forRoot({
          base: '/',
          options: {
              useMediaTypeExtensions: true
          }
      })
      ],
      providers: [
        AuthGuard,
        ActivatedUserService,
        ActivatedUserSnapshot,
        {
          provide: AUTH_CONFIG,
          useValue: {
            login: '/auth/login',
          }
        }
    ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
