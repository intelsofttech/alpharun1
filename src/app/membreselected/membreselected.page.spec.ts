import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembreselectedPage } from './membreselected.page';

describe('MembreselectedPage', () => {
  let component: MembreselectedPage;
  let fixture: ComponentFixture<MembreselectedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MembreselectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
