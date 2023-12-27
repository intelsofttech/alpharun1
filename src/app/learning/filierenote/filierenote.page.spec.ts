import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilierenotePage } from './filierenote.page';

describe('FilierenotePage', () => {
  let component: FilierenotePage;
  let fixture: ComponentFixture<FilierenotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FilierenotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
