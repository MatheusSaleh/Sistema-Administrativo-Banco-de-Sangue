import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarPessoasPrecisandoDeDoacaoComponent } from './gerenciar-pessoas-precisando-de-doacao.component';

describe('GerenciarPessoasPrecisandoDeDoacaoComponent', () => {
  let component: GerenciarPessoasPrecisandoDeDoacaoComponent;
  let fixture: ComponentFixture<GerenciarPessoasPrecisandoDeDoacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarPessoasPrecisandoDeDoacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciarPessoasPrecisandoDeDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
