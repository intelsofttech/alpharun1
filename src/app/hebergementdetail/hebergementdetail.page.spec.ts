import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HebergementdetailPage } from './hebergementdetail.page';

describe('HebergementdetailPage', () => {
  let component: HebergementdetailPage;
  let fixture: ComponentFixture<HebergementdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HebergementdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
