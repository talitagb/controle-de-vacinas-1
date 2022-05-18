import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacinacaoComponent } from './vacinacao.component';


describe('VacinacaoComponent', () => {
  let component: VacinacaoComponent;
  let fixture: ComponentFixture<VacinacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
