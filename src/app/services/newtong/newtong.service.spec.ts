import { TestBed } from '@angular/core/testing';

import { NewtongService } from './newtong.service';

describe('NewtongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewtongService = TestBed.get(NewtongService);
    expect(service).toBeTruthy();
  });
});
