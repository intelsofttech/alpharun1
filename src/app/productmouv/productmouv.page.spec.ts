import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductmouvPage } from './productmouv.page';

describe('ProductmouvPage', () => {
  let component: ProductmouvPage;
  let fixture: ComponentFixture<ProductmouvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductmouvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
