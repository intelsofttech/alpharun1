import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommissionPage } from './commission.page';

describe('CommissionPage', () => {
  let component: CommissionPage;
  let fixture: ComponentFixture<CommissionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
