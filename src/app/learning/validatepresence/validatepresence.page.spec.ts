import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidatepresencePage } from './validatepresence.page';

describe('ValidatepresencePage', () => {
  let component: ValidatepresencePage;
  let fixture: ComponentFixture<ValidatepresencePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValidatepresencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
