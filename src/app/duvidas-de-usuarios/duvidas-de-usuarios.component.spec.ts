import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuvidasDeUsuariosComponent } from './duvidas-de-usuarios.component';

describe('DuvidasDeUsuariosComponent', () => {
  let component: DuvidasDeUsuariosComponent;
  let fixture: ComponentFixture<DuvidasDeUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuvidasDeUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuvidasDeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
