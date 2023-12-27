import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillprintPage } from './billprint.page';

describe('BillprintPage', () => {
  let component: BillprintPage;
  let fixture: ComponentFixture<BillprintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BillprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
