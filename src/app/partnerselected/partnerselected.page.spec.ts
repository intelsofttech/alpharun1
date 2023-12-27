import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerselectedPage } from './partnerselected.page';

describe('PartnerselectedPage', () => {
  let component: PartnerselectedPage;
  let fixture: ComponentFixture<PartnerselectedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PartnerselectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
