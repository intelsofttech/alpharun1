import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewoperationPage } from './newoperation.page';

describe('NewoperationPage', () => {
  let component: NewoperationPage;
  let fixture: ComponentFixture<NewoperationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewoperationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
