import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClaseComponent } from './form-clase.component';

describe('FormClaseComponent', () => {
  let component: FormClaseComponent;
  let fixture: ComponentFixture<FormClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormClaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
