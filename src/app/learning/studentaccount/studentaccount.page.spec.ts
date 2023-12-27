import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentaccountPage } from './studentaccount.page';

describe('StudentaccountPage', () => {
  let component: StudentaccountPage;
  let fixture: ComponentFixture<StudentaccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
