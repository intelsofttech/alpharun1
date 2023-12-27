import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProprietePage } from './propriete.page';

describe('ProprietePage', () => {
  let component: ProprietePage;
  let fixture: ComponentFixture<ProprietePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProprietePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
