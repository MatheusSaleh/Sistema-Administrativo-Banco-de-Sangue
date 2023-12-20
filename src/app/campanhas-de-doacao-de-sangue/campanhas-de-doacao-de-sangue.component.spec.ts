import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhasDeDoacaoDeSangueComponent } from './campanhas-de-doacao-de-sangue.component';

describe('CampanhasDeDoacaoDeSangueComponent', () => {
  let component: CampanhasDeDoacaoDeSangueComponent;
  let fixture: ComponentFixture<CampanhasDeDoacaoDeSangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampanhasDeDoacaoDeSangueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampanhasDeDoacaoDeSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
