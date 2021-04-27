import { TestBed } from '@angular/core/testing';

import { CyclePaiementService } from './cycle-paiement.service';

describe('CyclePaiementService', () => {
  let service: CyclePaiementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyclePaiementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
