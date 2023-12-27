import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoneditionPage } from './bonedition.page';

describe('BoneditionPage', () => {
  let component: BoneditionPage;
  let fixture: ComponentFixture<BoneditionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoneditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
