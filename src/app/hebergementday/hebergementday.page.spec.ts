import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HebergementdayPage } from './hebergementday.page';

describe('HebergementdayPage', () => {
  let component: HebergementdayPage;
  let fixture: ComponentFixture<HebergementdayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HebergementdayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
