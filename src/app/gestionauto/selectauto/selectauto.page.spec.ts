import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectautoPage } from './selectauto.page';

describe('SelectautoPage', () => {
  let component: SelectautoPage;
  let fixture: ComponentFixture<SelectautoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectautoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
