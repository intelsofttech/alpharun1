import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonrecuPage } from './bonrecu.page';

describe('BonrecuPage', () => {
  let component: BonrecuPage;
  let fixture: ComponentFixture<BonrecuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BonrecuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
