import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PointabsencePage } from './pointabsence.page';

describe('PointabsencePage', () => {
  let component: PointabsencePage;
  let fixture: ComponentFixture<PointabsencePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PointabsencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
