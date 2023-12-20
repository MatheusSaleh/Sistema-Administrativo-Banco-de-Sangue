import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaNoticiasComponent } from './tabela-noticias.component';

describe('TabelaNoticiasComponent', () => {
  let component: TabelaNoticiasComponent;
  let fixture: ComponentFixture<TabelaNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaNoticiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
