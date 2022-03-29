import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MostModule } from '../module';
import { ActivatedUserService, ActivatedUserSnapshot } from './activated-user.service';
import { AUTH_CONFIG } from './auth.interfaces';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
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
      AuthService,
      ActivatedUserService,
      ActivatedUserSnapshot,
      {
        provide: AUTH_CONFIG,
        useValue: {
          login: '/auth/login',
        }
      }
    ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
