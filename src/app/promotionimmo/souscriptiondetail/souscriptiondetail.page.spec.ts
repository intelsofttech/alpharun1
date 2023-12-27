import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouscriptiondetailPage } from './souscriptiondetail.page';

describe('SouscriptiondetailPage', () => {
  let component: SouscriptiondetailPage;
  let fixture: ComponentFixture<SouscriptiondetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouscriptiondetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
