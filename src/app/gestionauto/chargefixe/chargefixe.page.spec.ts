import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChargefixePage } from './chargefixe.page';

describe('ChargefixePage', () => {
  let component: ChargefixePage;
  let fixture: ComponentFixture<ChargefixePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChargefixePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
