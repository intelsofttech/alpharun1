import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditfilierePage } from './editfiliere.page';

describe('EditfilierePage', () => {
  let component: EditfilierePage;
  let fixture: ComponentFixture<EditfilierePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditfilierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
