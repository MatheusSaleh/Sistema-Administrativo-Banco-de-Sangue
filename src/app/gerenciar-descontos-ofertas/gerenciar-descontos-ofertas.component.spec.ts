import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarDescontosOfertasComponent } from './gerenciar-descontos-ofertas.component';

describe('GerenciarDescontosOfertasComponent', () => {
  let component: GerenciarDescontosOfertasComponent;
  let fixture: ComponentFixture<GerenciarDescontosOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarDescontosOfertasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciarDescontosOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
