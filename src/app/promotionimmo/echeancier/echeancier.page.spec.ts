import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcheancierPage } from './echeancier.page';

describe('EcheancierPage', () => {
  let component: EcheancierPage;
  let fixture: ComponentFixture<EcheancierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EcheancierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
