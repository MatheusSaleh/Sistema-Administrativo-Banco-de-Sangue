import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaReceptoresComponent } from './tabela-receptores.component';

describe('TabelaReceptoresComponent', () => {
  let component: TabelaReceptoresComponent;
  let fixture: ComponentFixture<TabelaReceptoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaReceptoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaReceptoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
