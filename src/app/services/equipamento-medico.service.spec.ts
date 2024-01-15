import { TestBed } from '@angular/core/testing';

import { EquipamentoMedicoService } from './equipamento-medico.service';

describe('EquipamentoMedicoService', () => {
  let service: EquipamentoMedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipamentoMedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
