import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaEquipamentosMedicosComponent } from './gerencia-equipamentos-medicos.component';

describe('GerenciaEquipamentosMedicosComponent', () => {
  let component: GerenciaEquipamentosMedicosComponent;
  let fixture: ComponentFixture<GerenciaEquipamentosMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciaEquipamentosMedicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciaEquipamentosMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
