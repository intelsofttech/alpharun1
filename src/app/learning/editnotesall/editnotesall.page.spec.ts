import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditnotesallPage } from './editnotesall.page';

describe('EditnotesallPage', () => {
  let component: EditnotesallPage;
  let fixture: ComponentFixture<EditnotesallPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditnotesallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
