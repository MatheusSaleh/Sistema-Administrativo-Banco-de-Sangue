import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleAcessosComponent } from './controle-acessos.component';

describe('ControleAcessosComponent', () => {
  let component: ControleAcessosComponent;
  let fixture: ComponentFixture<ControleAcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleAcessosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControleAcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
