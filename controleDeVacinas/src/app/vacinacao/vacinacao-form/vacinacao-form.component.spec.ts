import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacinacaoFormComponent } from './vacinacao-form.component';


describe('VacinacaoFormComponent', () => {
  let component: VacinacaoFormComponent;
  let fixture: ComponentFixture<VacinacaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinacaoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
