import { TestBed } from '@angular/core/testing';

import { PersonneServicesService } from './personne-services.service';

describe('PersonneServicesService', () => {
  let service: PersonneServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
