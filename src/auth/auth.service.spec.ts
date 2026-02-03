import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import {MostModule} from '../module';
import {AuthModule} from './auth.module';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
          HttpClientModule,
          CommonModule,
          RouterModule.forRoot([]),
          MostModule.forRoot({
              base: 'http://localhost:8080/api/',
              options: {
                  useMediaTypeExtensions: false
              }
          }),
          AuthModule.forRoot({
              login: 'http://localhost:8080/auth/login',
              client_id: '9165351833584149',
              scope: ['profile'],
              callback: 'http://localhost:4200/auth/callback'
          })
      ],
      providers: [
          {
                provide: APP_BASE_HREF,
                useValue: '/'
          }
      ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
