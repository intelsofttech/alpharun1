import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditnotesresumePage } from './editnotesresume.page';

describe('EditnotesresumePage', () => {
  let component: EditnotesresumePage;
  let fixture: ComponentFixture<EditnotesresumePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditnotesresumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
