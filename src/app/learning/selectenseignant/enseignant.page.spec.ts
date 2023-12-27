import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnseignantPage } from './enseignant.page';

describe('EnseignantPage', () => {
  let component: EnseignantPage;
  let fixture: ComponentFixture<EnseignantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnseignantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
