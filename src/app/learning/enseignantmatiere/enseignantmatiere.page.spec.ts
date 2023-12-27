import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnseignantmatierePage } from './enseignantmatiere.page';

describe('EnseignantmatierePage', () => {
  let component: EnseignantmatierePage;
  let fixture: ComponentFixture<EnseignantmatierePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnseignantmatierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
