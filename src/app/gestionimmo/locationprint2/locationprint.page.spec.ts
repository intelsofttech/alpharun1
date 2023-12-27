import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationprintPage } from './locationprint.page';

describe('LocationprintPage', () => {
  let component: LocationprintPage;
  let fixture: ComponentFixture<LocationprintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocationprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
