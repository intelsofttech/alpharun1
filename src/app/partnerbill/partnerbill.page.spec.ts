import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerbillPage } from './partnerbill.page';

describe('PartnerbillPage', () => {
  let component: PartnerbillPage;
  let fixture: ComponentFixture<PartnerbillPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PartnerbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
