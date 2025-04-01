import { TestBed } from '@angular/core/testing';

import { DiagnostiqueService } from './diagnostique.service';

describe('DiagnostiqueService', () => {
  let service: DiagnostiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnostiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
