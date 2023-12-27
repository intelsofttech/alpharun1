import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanningpaymentPage } from './planningpayment.page';

describe('PlanningpaymentPage', () => {
  let component: PlanningpaymentPage;
  let fixture: ComponentFixture<PlanningpaymentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanningpaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
