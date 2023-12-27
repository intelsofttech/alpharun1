import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditpresenceensPage } from './editpresenceens.page';

describe('EditpresenceensPage', () => {
  let component: EditpresenceensPage;
  let fixture: ComponentFixture<EditpresenceensPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditpresenceensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
