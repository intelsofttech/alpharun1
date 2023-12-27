import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LotstatutPage } from './lotstatut.page';

describe('LotstatutPage', () => {
  let component: LotstatutPage;
  let fixture: ComponentFixture<LotstatutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LotstatutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
