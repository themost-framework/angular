import {TestBed} from '@angular/core/testing';

import {ActivatedUserService} from './activated-user.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthModule} from './auth.module';
import {MostModule} from '../module';

describe('ActivatedUserService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
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
        ]
    }));

    it('should be created', () => {
        const service: ActivatedUserService = TestBed.get(ActivatedUserService);
        expect(service).toBeTruthy();
    });
});
