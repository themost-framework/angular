import { TestBed } from '@angular/core/testing';

import { ActivatedUserService } from './activated-user.service';

describe('ActivatedUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivatedUserService = TestBed.get(ActivatedUserService);
    expect(service).toBeTruthy();
  });
});
