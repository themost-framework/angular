import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {MostModule} from '../module';
import {AuthModule} from './auth.module';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            CommonModule,
            RouterModule.forRoot([]),
            HttpClientModule,
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
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
