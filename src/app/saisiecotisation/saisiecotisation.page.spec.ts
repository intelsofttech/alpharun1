import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaisiecotisationPage } from './saisiecotisation.page';

describe('SaisiecotisationPage', () => {
  let component: SaisiecotisationPage;
  let fixture: ComponentFixture<SaisiecotisationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaisiecotisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
