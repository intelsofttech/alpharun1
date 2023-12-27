import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartementPage } from './departement.page';

describe('DepartementPage', () => {
  let component: DepartementPage;
  let fixture: ComponentFixture<DepartementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DepartementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
