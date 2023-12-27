import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParamsdetailPage } from './paramsdetail.page';

describe('ParamsdetailPage', () => {
  let component: ParamsdetailPage;
  let fixture: ComponentFixture<ParamsdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParamsdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
