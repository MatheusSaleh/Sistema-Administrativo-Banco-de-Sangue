import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarEmpresasParceirasComponent } from './gerenciar-empresas-parceiras.component';

describe('GerenciarEmpresasParceirasComponent', () => {
  let component: GerenciarEmpresasParceirasComponent;
  let fixture: ComponentFixture<GerenciarEmpresasParceirasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarEmpresasParceirasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciarEmpresasParceirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
