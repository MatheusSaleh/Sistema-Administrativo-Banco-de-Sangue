import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarFeedbacksPosDoacaoComponent } from './gerenciar-feedbacks-pos-doacao.component';

describe('GerenciarFeedbacksPosDoacaoComponent', () => {
  let component: GerenciarFeedbacksPosDoacaoComponent;
  let fixture: ComponentFixture<GerenciarFeedbacksPosDoacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarFeedbacksPosDoacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciarFeedbacksPosDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
