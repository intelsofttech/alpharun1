import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorairePage } from './horaire.page';

describe('HorairePage', () => {
  let component: HorairePage;
  let fixture: ComponentFixture<HorairePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HorairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
