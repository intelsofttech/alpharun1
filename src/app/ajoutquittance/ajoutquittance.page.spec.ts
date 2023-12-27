import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutquittancePage } from './ajoutquittance.page';

describe('AjoutquittancePage', () => {
  let component: AjoutquittancePage;
  let fixture: ComponentFixture<AjoutquittancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutquittancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
