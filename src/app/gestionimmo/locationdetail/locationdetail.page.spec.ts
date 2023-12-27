import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationdetailPage } from './locationdetail.page';

describe('LocationdetailPage', () => {
  let component: LocationdetailPage;
  let fixture: ComponentFixture<LocationdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocationdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
