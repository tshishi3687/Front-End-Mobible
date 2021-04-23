import { TestBed } from '@angular/core/testing';

import { DonneeService } from './donnee.service';

describe('DonneeService', () => {
  let service: DonneeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonneeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
