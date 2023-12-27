import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditioncotisationPage } from './editioncotisation.page';

describe('EditioncotisationPage', () => {
  let component: EditioncotisationPage;
  let fixture: ComponentFixture<EditioncotisationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditioncotisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
