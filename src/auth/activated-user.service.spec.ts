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
    providers: [ActivatedUserService, ActivatedUserSnapshot]
  }));

  it('should be created', () => {
    const service: ActivatedUserService = TestBed.get(ActivatedUserService);
    expect(service).toBeTruthy();
  });
});
