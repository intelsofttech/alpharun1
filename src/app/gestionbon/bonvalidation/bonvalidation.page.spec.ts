import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonvalidationPage } from './bonvalidation.page';

describe('BonvalidationPage', () => {
  let component: BonvalidationPage;
  let fixture: ComponentFixture<BonvalidationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BonvalidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
