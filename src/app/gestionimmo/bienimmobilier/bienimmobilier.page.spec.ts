import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BienimmobilierPage } from './bienimmobilier.page';

describe('BienimmobilierPage', () => {
  let component: BienimmobilierPage;
  let fixture: ComponentFixture<BienimmobilierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BienimmobilierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
