import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonhistoriquePage } from './bonhistorique.page';

describe('BonhistoriquePage', () => {
  let component: BonhistoriquePage;
  let fixture: ComponentFixture<BonhistoriquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BonhistoriquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
