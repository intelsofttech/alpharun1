import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BondetailPage } from './bondetail.page';

describe('BondetailPage', () => {
  let component: BondetailPage;
  let fixture: ComponentFixture<BondetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BondetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
