import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuiMissoesComponent } from './atribui-missoes.component';

describe('AtribuiMissoesComponent', () => {
  let component: AtribuiMissoesComponent;
  let fixture: ComponentFixture<AtribuiMissoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtribuiMissoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtribuiMissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
