import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditpresencePage } from './editpresence.page';

describe('EditpresencePage', () => {
  let component: EditpresencePage;
  let fixture: ComponentFixture<EditpresencePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditpresencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
