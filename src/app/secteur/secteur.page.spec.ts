import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecteurPage } from './secteur.page';

describe('SecteurPage', () => {
  let component: SecteurPage;
  let fixture: ComponentFixture<SecteurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SecteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
