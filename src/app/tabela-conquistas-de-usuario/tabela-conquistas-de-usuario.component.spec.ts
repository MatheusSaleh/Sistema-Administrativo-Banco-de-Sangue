import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaConquistasDeUsuarioComponent } from './tabela-conquistas-de-usuario.component';

describe('TabelaConquistasDeUsuarioComponent', () => {
  let component: TabelaConquistasDeUsuarioComponent;
  let fixture: ComponentFixture<TabelaConquistasDeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaConquistasDeUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaConquistasDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
