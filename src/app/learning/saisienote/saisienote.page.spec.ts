import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaisienotePage } from './saisienote.page';

describe('SaisienotePage', () => {
  let component: SaisienotePage;
  let fixture: ComponentFixture<SaisienotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaisienotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
