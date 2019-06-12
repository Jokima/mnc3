import { TestBed } from '@angular/core/testing';

import { AjusteService } from './ajuste.service';

describe('AjusteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjusteService = TestBed.get(AjusteService);
    expect(service).toBeTruthy();
  });
});
