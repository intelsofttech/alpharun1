import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BilanPage } from './bilan.page';

describe('BilanPage', () => {
  let component: BilanPage;
  let fixture: ComponentFixture<BilanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BilanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
