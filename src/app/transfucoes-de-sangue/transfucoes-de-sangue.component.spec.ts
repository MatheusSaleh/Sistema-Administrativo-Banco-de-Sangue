import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfucoesDeSangueComponent } from './transfucoes-de-sangue.component';

describe('TransfucoesDeSangueComponent', () => {
  let component: TransfucoesDeSangueComponent;
  let fixture: ComponentFixture<TransfucoesDeSangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransfucoesDeSangueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransfucoesDeSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
