import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectconducteurPage } from './selectconducteur.page';

describe('SelectconducteurPage', () => {
  let component: SelectconducteurPage;
  let fixture: ComponentFixture<SelectconducteurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectconducteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
