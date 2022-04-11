import { TestBed } from '@angular/core/testing';

import { PoolGenService } from './pool-gen.service';

describe('PoolGenService', () => {
  let service: PoolGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoolGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
