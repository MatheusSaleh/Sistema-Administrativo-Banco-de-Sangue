import { TestBed } from '@angular/core/testing';

import { PerguntaParaElegibilidadeService } from './pergunta-para-elegibilidade.service';

describe('PerguntaParaElegibilidadeService', () => {
  let service: PerguntaParaElegibilidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerguntaParaElegibilidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
