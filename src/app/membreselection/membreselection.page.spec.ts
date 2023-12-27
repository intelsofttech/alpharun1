import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembreselectionPage } from './membreselection.page';

describe('MembreselectionPage', () => {
  let component: MembreselectionPage;
  let fixture: ComponentFixture<MembreselectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MembreselectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
