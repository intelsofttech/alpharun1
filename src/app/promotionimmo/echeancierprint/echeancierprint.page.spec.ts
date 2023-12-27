import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcheancierprintPage } from './echeancierprint.page';

describe('EcheancierprintPage', () => {
  let component: EcheancierprintPage;
  let fixture: ComponentFixture<EcheancierprintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EcheancierprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
