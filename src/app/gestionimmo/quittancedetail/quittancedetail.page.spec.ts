import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuittancedetailPage } from './quittancedetail.page';

describe('QuittancedetailPage', () => {
  let component: QuittancedetailPage;
  let fixture: ComponentFixture<QuittancedetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuittancedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
