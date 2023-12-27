import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApartmentprintPage } from './apartmentprint.page';

describe('ApartmentprintPage', () => {
  let component: ApartmentprintPage;
  let fixture: ComponentFixture<ApartmentprintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApartmentprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
