import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectpartnerPage } from './selectpartner.page';

describe('SelectpartnerPage', () => {
  let component: SelectpartnerPage;
  let fixture: ComponentFixture<SelectpartnerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectpartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
