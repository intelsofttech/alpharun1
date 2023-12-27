import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewcotisationPage } from './newcotisation.page';

describe('NewcotisationPage', () => {
  let component: NewcotisationPage;
  let fixture: ComponentFixture<NewcotisationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewcotisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
