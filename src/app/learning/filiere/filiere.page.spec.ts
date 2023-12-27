import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilierePage } from './filiere.page';

describe('FilierePage', () => {
  let component: FilierePage;
  let fixture: ComponentFixture<FilierePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FilierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
