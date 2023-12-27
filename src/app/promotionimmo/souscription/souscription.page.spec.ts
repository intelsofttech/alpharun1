import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouscriptionPage } from './souscription.page';

describe('SouscriptionPage', () => {
  let component: SouscriptionPage;
  let fixture: ComponentFixture<SouscriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
