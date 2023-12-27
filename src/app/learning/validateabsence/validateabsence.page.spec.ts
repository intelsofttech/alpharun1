import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidateabsencePage } from './validateabsence.page';

describe('ValidateabsencePage', () => {
  let component: ValidateabsencePage;
  let fixture: ComponentFixture<ValidateabsencePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValidateabsencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
