import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectionchambrePage } from './selectionchambre.page';

describe('SelectionchambrePage', () => {
  let component: SelectionchambrePage;
  let fixture: ComponentFixture<SelectionchambrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectionchambrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
