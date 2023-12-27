import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassematierePage } from './classematiere.page';

describe('ClassematierePage', () => {
  let component: ClassematierePage;
  let fixture: ComponentFixture<ClassematierePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClassematierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
