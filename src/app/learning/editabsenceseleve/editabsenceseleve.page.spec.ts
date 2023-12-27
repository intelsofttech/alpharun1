import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditabsenceselevePage } from './editabsenceseleve.page';

describe('EditabsenceselevePage', () => {
  let component: EditabsenceselevePage;
  let fixture: ComponentFixture<EditabsenceselevePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditabsenceselevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
