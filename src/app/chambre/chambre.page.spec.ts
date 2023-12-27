import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChambrePage } from './chambre.page';

describe('ChambrePage', () => {
  let component: ChambrePage;
  let fixture: ComponentFixture<ChambrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChambrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
