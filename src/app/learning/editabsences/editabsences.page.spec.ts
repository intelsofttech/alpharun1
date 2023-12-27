import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditabsencesPage } from './editabsences.page';

describe('EditabsencesPage', () => {
  let component: EditabsencesPage;
  let fixture: ComponentFixture<EditabsencesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditabsencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
