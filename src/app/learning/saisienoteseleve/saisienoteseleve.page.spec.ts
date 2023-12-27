import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaisienoteselevePage } from './saisienoteseleve.page';

describe('SaisienoteselevePage', () => {
  let component: SaisienoteselevePage;
  let fixture: ComponentFixture<SaisienoteselevePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaisienoteselevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
