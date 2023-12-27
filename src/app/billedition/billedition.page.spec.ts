import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BilleditionPage } from './billedition.page';

describe('BilleditionPage', () => {
  let component: BilleditionPage;
  let fixture: ComponentFixture<BilleditionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BilleditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
