import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApartmentPage } from './apartment.page';

describe('ApartmentPage', () => {
  let component: ApartmentPage;
  let fixture: ComponentFixture<ApartmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApartmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
