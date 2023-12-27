import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrierePage } from './arriere.page';

describe('ArrierePage', () => {
  let component: ArrierePage;
  let fixture: ComponentFixture<ArrierePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArrierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
