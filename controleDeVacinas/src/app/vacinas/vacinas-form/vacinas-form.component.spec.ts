import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacinasFormComponent } from './vacinas-form.component';


describe('VacinasFormComponent', () => {
  let component: VacinasFormComponent;
  let fixture: ComponentFixture<VacinasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
