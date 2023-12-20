import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicaoComOutrosHemocentrosComponent } from './comunicao-com-outros-hemocentros.component';

describe('ComunicaoComOutrosHemocentrosComponent', () => {
  let component: ComunicaoComOutrosHemocentrosComponent;
  let fixture: ComponentFixture<ComunicaoComOutrosHemocentrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicaoComOutrosHemocentrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComunicaoComOutrosHemocentrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
