import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarDoacaoEmMassaParaEmpresaComponent } from './solicitar-doacao-em-massa-para-empresa.component';

describe('SolicitarDoacaoEmMassaParaEmpresaComponent', () => {
  let component: SolicitarDoacaoEmMassaParaEmpresaComponent;
  let fixture: ComponentFixture<SolicitarDoacaoEmMassaParaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarDoacaoEmMassaParaEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitarDoacaoEmMassaParaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
