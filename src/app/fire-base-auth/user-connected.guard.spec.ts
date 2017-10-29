import { TestBed, async, inject } from '@angular/core/testing';

import { UserConnectedGuard } from './user-connected.guard';

describe('UserConnectedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserConnectedGuard]
    });
  });

  it('should ...', inject([UserConnectedGuard], (guard: UserConnectedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
