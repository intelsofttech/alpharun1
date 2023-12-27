import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaisieabsencePage } from './saisieabsence.page';

describe('SaisieabsencePage', () => {
  let component: SaisieabsencePage;
  let fixture: ComponentFixture<SaisieabsencePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaisieabsencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
