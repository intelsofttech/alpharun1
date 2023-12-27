import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FraisPage } from './frais.page';

describe('FraisPage', () => {
  let component: FraisPage;
  let fixture: ComponentFixture<FraisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
