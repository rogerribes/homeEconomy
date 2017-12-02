import { TestBed, async, inject } from '@angular/core/testing';

import { CanRegisterGuard } from './can-register.guard';

describe('CanRegisterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanRegisterGuard]
    });
  });

  it('should ...', inject([CanRegisterGuard], (guard: CanRegisterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
