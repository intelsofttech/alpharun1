import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonstatutPage } from './bonstatut.page';

describe('BonstatutPage', () => {
  let component: BonstatutPage;
  let fixture: ComponentFixture<BonstatutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BonstatutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
