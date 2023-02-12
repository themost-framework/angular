import { TestBed } from '@angular/core/testing';
import { MostModule } from '../module';

import { ActivatedUserService, ActivatedUserSnapshot } from './activated-user.service';

describe('ActivatedUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MostModule.forRoot({
        base: '/',
        options: {
            useMediaTypeExtensions: true
        }
    })
    ],
    providers: [ActivatedUserService]
  }));

  it('should be created', () => {
    const service: ActivatedUserService = TestBed.get(ActivatedUserService);
    expect(service).toBeTruthy();
  });

  it('should set user', () => {
    const service: ActivatedUserService = TestBed.get(ActivatedUserService);
    service.set({
      name: 'alexis.rees@exapmle.com'
    });
    expect(service.snapshot.user).toBeTruthy();
  });

  it('should get user snapshot', () => {
    const activatedUserService: ActivatedUserService = TestBed.get(ActivatedUserService);
    activatedUserService.set({
      name: 'alexis.rees@exapmle.com'
    });
    expect(activatedUserService.snapshot.user).toBeTruthy();
  });
});
