import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MostModule } from '../module';
import { ActivatedUserService, ActivatedUserSnapshot } from './activated-user.service';
import { AUTH_CONFIG } from './auth.interfaces';
import { AuthModule } from './auth.module';
import { AuthService } from './auth.service';

describe('AuthService', async() => {
  beforeEach(waitForAsync(() => {
    return TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MostModule.forRoot({
            base: '/',
            options: {
                useMediaTypeExtensions: true
            }
        }),
        AuthModule.forRoot({
          login: '/auth/login',
          client_id: '',
          scope: ['profile'],
          callback: '/auth/callback',
        })
      ],
      providers: [
      ]
    }).compileComponents();
  }));

  it('should get AuthService', inject([AuthService], async (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
