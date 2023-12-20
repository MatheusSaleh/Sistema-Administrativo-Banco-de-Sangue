import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarDoacaoDeSangueComponent } from './agendar-doacao-de-sangue.component';

describe('AgendarDoacaoDeSangueComponent', () => {
  let component: AgendarDoacaoDeSangueComponent;
  let fixture: ComponentFixture<AgendarDoacaoDeSangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendarDoacaoDeSangueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgendarDoacaoDeSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
