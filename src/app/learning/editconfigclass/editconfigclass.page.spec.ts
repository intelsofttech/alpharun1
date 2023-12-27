import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditconfigclassPage } from './editconfigclass.page';

describe('EditconfigclassPage', () => {
  let component: EditconfigclassPage;
  let fixture: ComponentFixture<EditconfigclassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditconfigclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
