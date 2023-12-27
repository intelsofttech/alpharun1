import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichePage } from './fiche.page';

describe('FichePage', () => {
  let component: FichePage;
  let fixture: ComponentFixture<FichePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
