import { TestBed } from '@angular/core/testing';

import { TransfusaoService } from './transfusao.service';

describe('TransfusaoService', () => {
  let service: TransfusaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransfusaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
