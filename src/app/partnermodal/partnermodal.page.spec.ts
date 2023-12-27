import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnermodalPage } from './partnermodal.page';

describe('PartnermodalPage', () => {
  let component: PartnermodalPage;
  let fixture: ComponentFixture<PartnermodalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PartnermodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
