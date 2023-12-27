import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillextPage } from './billext.page';

describe('BillextPage', () => {
  let component: BillextPage;
  let fixture: ComponentFixture<BillextPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BillextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
