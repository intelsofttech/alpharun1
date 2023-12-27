import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BilldetailPage } from './billdetail.page';

describe('BilldetailPage', () => {
  let component: BilldetailPage;
  let fixture: ComponentFixture<BilldetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BilldetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
