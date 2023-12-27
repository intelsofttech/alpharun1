import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BondecaissePage } from './bondecaisse.page';

describe('BondecaissePage', () => {
  let component: BondecaissePage;
  let fixture: ComponentFixture<BondecaissePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BondecaissePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
