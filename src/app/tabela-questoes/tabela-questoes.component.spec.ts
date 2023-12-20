import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaQuestoesComponent } from './tabela-questoes.component';

describe('TabelaQuestoesComponent', () => {
  let component: TabelaQuestoesComponent;
  let fixture: ComponentFixture<TabelaQuestoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaQuestoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
