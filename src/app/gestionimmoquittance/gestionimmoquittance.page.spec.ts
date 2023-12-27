import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionimmoquittancePage } from './gestionimmoquittance.page';

describe('GestionimmoquittancePage', () => {
  let component: GestionimmoquittancePage;
  let fixture: ComponentFixture<GestionimmoquittancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionimmoquittancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
