import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectautomobilePage } from './selectautomobile.page';

describe('SelectautomobilePage', () => {
  let component: SelectautomobilePage;
  let fixture: ComponentFixture<SelectautomobilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectautomobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
