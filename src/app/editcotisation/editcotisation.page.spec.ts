import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditcotisationPage } from './editcotisation.page';

describe('EditcotisationPage', () => {
  let component: EditcotisationPage;
  let fixture: ComponentFixture<EditcotisationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditcotisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
