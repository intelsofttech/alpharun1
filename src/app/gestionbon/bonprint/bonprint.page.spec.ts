import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonprintPage } from './bonprint.page';

describe('BonprintPage', () => {
  let component: BonprintPage;
  let fixture: ComponentFixture<BonprintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BonprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
