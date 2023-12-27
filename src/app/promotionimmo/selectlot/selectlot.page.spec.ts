import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectlotPage } from './selectlot.page';

describe('SelectlotPage', () => {
  let component: SelectlotPage;
  let fixture: ComponentFixture<SelectlotPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectlotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
