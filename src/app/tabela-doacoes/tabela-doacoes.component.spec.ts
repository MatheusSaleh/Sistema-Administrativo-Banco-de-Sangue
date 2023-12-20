import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDoacoesComponent } from './tabela-doacoes.component';

describe('TabelaDoacoesComponent', () => {
  let component: TabelaDoacoesComponent;
  let fixture: ComponentFixture<TabelaDoacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaDoacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaDoacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
