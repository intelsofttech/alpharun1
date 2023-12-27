import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembredetailPage } from './membredetail.page';

describe('MembredetailPage', () => {
  let component: MembredetailPage;
  let fixture: ComponentFixture<MembredetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MembredetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
