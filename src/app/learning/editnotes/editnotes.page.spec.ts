import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditnotesPage } from './editnotes.page';

describe('EditnotesPage', () => {
  let component: EditnotesPage;
  let fixture: ComponentFixture<EditnotesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditnotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
