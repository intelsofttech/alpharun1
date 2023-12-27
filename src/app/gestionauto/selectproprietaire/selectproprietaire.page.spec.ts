import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectproprietairePage } from './selectproprietaire.page';

describe('SelectproprietairePage', () => {
  let component: SelectproprietairePage;
  let fixture: ComponentFixture<SelectproprietairePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectproprietairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
