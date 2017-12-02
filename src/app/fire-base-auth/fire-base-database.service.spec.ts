import { TestBed, inject } from '@angular/core/testing';

import { FireBaseDatabaseService } from './fire-base-database.service';

describe('FireBaseDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireBaseDatabaseService]
    });
  });

  it('should be created', inject([FireBaseDatabaseService], (service: FireBaseDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
