import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectpropertyPage } from './selectproperty.page';

describe('SelectpropertyPage', () => {
  let component: SelectpropertyPage;
  let fixture: ComponentFixture<SelectpropertyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectpropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
