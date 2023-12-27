import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecaissementsPage } from './decaissements.page';

describe('DecaissementsPage', () => {
  let component: DecaissementsPage;
  let fixture: ComponentFixture<DecaissementsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DecaissementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
