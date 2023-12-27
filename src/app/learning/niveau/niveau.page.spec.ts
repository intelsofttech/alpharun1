import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NiveauPage } from './niveau.page';

describe('NiveauPage', () => {
  let component: NiveauPage;
  let fixture: ComponentFixture<NiveauPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NiveauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
