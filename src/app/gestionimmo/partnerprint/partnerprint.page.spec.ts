import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerprintPage } from './partnerprint.page';

describe('PartnerprintPage', () => {
  let component: PartnerprintPage;
  let fixture: ComponentFixture<PartnerprintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PartnerprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
