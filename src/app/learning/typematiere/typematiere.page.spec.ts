import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypematierePage } from './typematiere.page';

describe('TypematierePage', () => {
  let component: TypematierePage;
  let fixture: ComponentFixture<TypematierePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypematierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
