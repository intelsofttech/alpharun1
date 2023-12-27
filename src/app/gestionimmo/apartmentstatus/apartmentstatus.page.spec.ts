import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApartmentstatusPage } from './apartmentstatus.page';

describe('ApartmentstatusPage', () => {
  let component: ApartmentstatusPage;
  let fixture: ComponentFixture<ApartmentstatusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApartmentstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
