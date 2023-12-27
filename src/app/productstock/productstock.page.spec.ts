import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductstockPage } from './productstock.page';

describe('ProductstockPage', () => {
  let component: ProductstockPage;
  let fixture: ComponentFixture<ProductstockPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductstockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
