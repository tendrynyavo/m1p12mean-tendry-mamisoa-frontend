import { TestBed } from '@angular/core/testing';

import { FiltreVehiculeService } from './filtre-vehicule.service';

describe('FiltreVehiculeService', () => {
  let service: FiltreVehiculeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltreVehiculeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
