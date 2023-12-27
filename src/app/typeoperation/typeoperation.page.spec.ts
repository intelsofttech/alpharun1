import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeoperationPage } from './typeoperation.page';

describe('TypeoperationPage', () => {
  let component: TypeoperationPage;
  let fixture: ComponentFixture<TypeoperationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypeoperationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
