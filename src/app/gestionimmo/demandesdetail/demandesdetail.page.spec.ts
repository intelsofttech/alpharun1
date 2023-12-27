import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemandesdetailPage } from './demandesdetail.page';

describe('DemandesdetailPage', () => {
  let component: DemandesdetailPage;
  let fixture: ComponentFixture<DemandesdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DemandesdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
