import { TestBed } from '@angular/core/testing';

import { ArmeService } from './weapon.service';

describe('ArmeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArmeService = TestBed.get(ArmeService);
    expect(service).toBeTruthy();
  });
});
