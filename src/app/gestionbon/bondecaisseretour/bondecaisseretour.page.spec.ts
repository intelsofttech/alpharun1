import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BondecaisseretourPage } from './bondecaisseretour.page';

describe('BondecaisseretourPage', () => {
  let component: BondecaisseretourPage;
  let fixture: ComponentFixture<BondecaisseretourPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BondecaisseretourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
