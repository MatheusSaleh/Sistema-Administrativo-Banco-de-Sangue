import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarGuiaDoacaoDeSangueComponent } from './atualizar-guia-doacao-de-sangue.component';

describe('AtualizarGuiaDoacaoDeSangueComponent', () => {
  let component: AtualizarGuiaDoacaoDeSangueComponent;
  let fixture: ComponentFixture<AtualizarGuiaDoacaoDeSangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarGuiaDoacaoDeSangueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizarGuiaDoacaoDeSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
