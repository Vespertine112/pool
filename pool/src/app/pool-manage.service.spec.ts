import { TestBed } from '@angular/core/testing';

import { PoolManageService } from './pool-manage.service';

describe('PoolManageService', () => {
  let service: PoolManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoolManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
