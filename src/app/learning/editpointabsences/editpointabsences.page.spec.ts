import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditpointabsencesPage } from './editpointabsences.page';

describe('EditpointabsencesPage', () => {
  let component: EditpointabsencesPage;
  let fixture: ComponentFixture<EditpointabsencesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditpointabsencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
