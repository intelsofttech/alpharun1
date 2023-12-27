import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DettePage } from './dette.page';

describe('DettePage', () => {
  let component: DettePage;
  let fixture: ComponentFixture<DettePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
