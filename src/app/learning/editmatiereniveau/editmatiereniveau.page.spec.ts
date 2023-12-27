import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditmatiereniveauPage } from './editmatiereniveau.page';

describe('EditmatiereniveauPage', () => {
  let component: EditmatiereniveauPage;
  let fixture: ComponentFixture<EditmatiereniveauPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditmatiereniveauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
