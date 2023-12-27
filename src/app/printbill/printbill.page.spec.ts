import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintbillPage } from './printbill.page';

describe('PrintbillPage', () => {
  let component: PrintbillPage;
  let fixture: ComponentFixture<PrintbillPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrintbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
