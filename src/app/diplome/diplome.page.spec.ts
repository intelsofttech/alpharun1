import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiplomePage } from './diplome.page';

describe('DiplomePage', () => {
  let component: DiplomePage;
  let fixture: ComponentFixture<DiplomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiplomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
