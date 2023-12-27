import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidatebillPage } from './validatebill.page';

describe('ValidatebillPage', () => {
  let component: ValidatebillPage;
  let fixture: ComponentFixture<ValidatebillPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValidatebillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
