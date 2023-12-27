import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillreportPage } from './billreport.page';

describe('BillreportPage', () => {
  let component: BillreportPage;
  let fixture: ComponentFixture<BillreportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BillreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
