import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnercontratPage } from './partnercontrat.page';

describe('PartnercontratPage', () => {
  let component: PartnercontratPage;
  let fixture: ComponentFixture<PartnercontratPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PartnercontratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
