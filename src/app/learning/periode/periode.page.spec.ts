import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeriodePage } from './periode.page';

describe('PeriodePage', () => {
  let component: PeriodePage;
  let fixture: ComponentFixture<PeriodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PeriodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
