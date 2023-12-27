import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjecteditionPage } from './projectedition.page';

describe('ProjecteditionPage', () => {
  let component: ProjecteditionPage;
  let fixture: ComponentFixture<ProjecteditionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProjecteditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
