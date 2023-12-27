import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChargevariablePage } from './chargevariable.page';

describe('ChargevariablePage', () => {
  let component: ChargevariablePage;
  let fixture: ComponentFixture<ChargevariablePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChargevariablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
