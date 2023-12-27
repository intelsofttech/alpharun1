import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaisieabsenceselevesPage } from './saisieabsenceseleves.page';

describe('SaisieabsenceselevesPage', () => {
  let component: SaisieabsenceselevesPage;
  let fixture: ComponentFixture<SaisieabsenceselevesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaisieabsenceselevesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
