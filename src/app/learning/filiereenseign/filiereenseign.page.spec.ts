import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiliereenseignPage } from './filiereenseign.page';

describe('FiliereenseignPage', () => {
  let component: FiliereenseignPage;
  let fixture: ComponentFixture<FiliereenseignPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FiliereenseignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
