import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutcotisationPage } from './ajoutcotisation.page';

describe('AjoutcotisationPage', () => {
  let component: AjoutcotisationPage;
  let fixture: ComponentFixture<AjoutcotisationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutcotisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
