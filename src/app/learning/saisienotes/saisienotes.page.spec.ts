import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaisienotesPage } from './saisienotes.page';

describe('SaisienotesPage', () => {
  let component: SaisienotesPage;
  let fixture: ComponentFixture<SaisienotesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaisienotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
