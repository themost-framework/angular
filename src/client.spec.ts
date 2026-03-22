import {TestBed, async, inject} from '@angular/core/testing';
import {MostModule, AngularDataContext} from './public_api';
import {HttpClient, HttpClientModule, HttpResponse} from '@angular/common/http';
import 'rxjs/operators';
import {map, switchMap} from 'rxjs/operators';
import {from, Observable} from 'rxjs';

function authenticateUser(http: HttpClient): Observable<{ access_token: string }> {
    return http.post<{ access_token: string }>('http://localhost:8080/auth/token', {
        client_id: '9165351833584149',
        client_secret: 'hTgqFBUhCfHs/quf/wnoB_UpDSfUusKA',
        username: 'alexis.rees@example.com',
        password: 'secret',
        grant_type: 'password',
        scope: 'profile'
    }, {
        responseType: 'json'
    });
}

describe('AngularDataContext', () => {
    beforeEach(async(() => {
        return TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                MostModule.forRoot({
                    base: 'http://localhost:8080/api/',
                    options: {
                        useMediaTypeExtensions: false
                    }
                })
            ]
        }).compileComponents();
    }));
    it('should get AngularDataContext', inject([AngularDataContext], (context: AngularDataContext) => {
        expect(context).toBeTruthy();
    }));
    it('should user AngularDataContext.getMetadata()', inject([AngularDataContext, HttpClient],
        async (context: AngularDataContext, http: HttpClient) => {
            await authenticateUser(http).pipe(map((token: any) => {
                // get metadata
                context.setBearerAuthorization(token.access_token);
                const metadata = context.getMetadata();
                expect(metadata).toBeTruthy();
            })).toPromise();
        }));
    it('should get Computed annotation', inject([AngularDataContext, HttpClient],
        async (context: AngularDataContext, http: HttpClient) => {
            const metadata = await context.getMetadata();
            expect(metadata).toBeTruthy();
            // get entity type
            const entityType = metadata.EntityType.find(x => {
                return x.Name === 'Thing';
            });
            expect(entityType).toBeTruthy();
            const property = entityType.Property.find(x => {
                return x.Name === 'createdBy';
            });
            expect(property).toBeTruthy();
            const findAnnotation = property.Annotations.find(x => {
                return x.Term === 'Org.OData.Core.V1.Computed';
            });
            expect(findAnnotation).toBeTruthy();
            expect(findAnnotation.Bool).toBe(true);
        }));

    it('should get user', inject([AngularDataContext, HttpClient],
        async (context: AngularDataContext, http: HttpClient) => {
            const user = await authenticateUser(http).pipe(switchMap((token: any) => {
                context.setBearerAuthorization(token.access_token);
                return from(context.model('Users/Me').asQueryable().getItem());
            })).toPromise();
            expect(user).toBeTruthy();
            expect(user.name).toEqual('alexis.rees@example.com');
        }));

});
