import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouscriptionprintPage } from './souscriptionprint.page';

describe('SouscriptionprintPage', () => {
  let component: SouscriptionprintPage;
  let fixture: ComponentFixture<SouscriptionprintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouscriptionprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
