import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddabsenceselevesPage } from './addabsenceseleves.page';

describe('AddabsenceselevesPage', () => {
  let component: AddabsenceselevesPage;
  let fixture: ComponentFixture<AddabsenceselevesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddabsenceselevesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
