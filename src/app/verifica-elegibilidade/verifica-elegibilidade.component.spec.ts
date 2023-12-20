import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaElegibilidadeComponent } from './verifica-elegibilidade.component';

describe('VerificaElegibilidadeComponent', () => {
  let component: VerificaElegibilidadeComponent;
  let fixture: ComponentFixture<VerificaElegibilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificaElegibilidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificaElegibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
