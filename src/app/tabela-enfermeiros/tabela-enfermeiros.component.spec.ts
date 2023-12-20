import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEnfermeirosComponent } from './tabela-enfermeiros.component';

describe('TabelaEnfermeirosComponent', () => {
  let component: TabelaEnfermeirosComponent;
  let fixture: ComponentFixture<TabelaEnfermeirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaEnfermeirosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaEnfermeirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
