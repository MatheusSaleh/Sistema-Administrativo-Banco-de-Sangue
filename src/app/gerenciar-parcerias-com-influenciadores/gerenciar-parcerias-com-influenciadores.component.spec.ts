import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarParceriasComInfluenciadoresComponent } from './gerenciar-parcerias-com-influenciadores.component';

describe('GerenciarParceriasComInfluenciadoresComponent', () => {
  let component: GerenciarParceriasComInfluenciadoresComponent;
  let fixture: ComponentFixture<GerenciarParceriasComInfluenciadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarParceriasComInfluenciadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciarParceriasComInfluenciadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
