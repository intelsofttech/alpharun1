import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HebergementnuitePage } from './hebergementnuite.page';

describe('HebergementnuitePage', () => {
  let component: HebergementnuitePage;
  let fixture: ComponentFixture<HebergementnuitePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HebergementnuitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
