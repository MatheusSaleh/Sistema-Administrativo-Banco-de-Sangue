import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarMedicosComponent } from './gerenciar-medicos.component';

describe('GerenciarMedicosComponent', () => {
  let component: GerenciarMedicosComponent;
  let fixture: ComponentFixture<GerenciarMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarMedicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
