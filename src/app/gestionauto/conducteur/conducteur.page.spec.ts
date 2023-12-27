import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConducteurPage } from './conducteur.page';

describe('ConducteurPage', () => {
  let component: ConducteurPage;
  let fixture: ComponentFixture<ConducteurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConducteurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
