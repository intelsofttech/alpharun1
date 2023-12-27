import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductselectionPage } from './productselection.page';

describe('ProductselectionPage', () => {
  let component: ProductselectionPage;
  let fixture: ComponentFixture<ProductselectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductselectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
