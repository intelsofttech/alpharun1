import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocietePage } from './societe.page';

describe('SocietePage', () => {
  let component: SocietePage;
  let fixture: ComponentFixture<SocietePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SocietePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
