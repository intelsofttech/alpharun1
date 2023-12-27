import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApartementdetailPage } from './apartementdetail.page';

describe('ApartementdetailPage', () => {
  let component: ApartementdetailPage;
  let fixture: ComponentFixture<ApartementdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApartementdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
