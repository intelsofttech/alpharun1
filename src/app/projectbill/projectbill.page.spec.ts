import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectbillPage } from './projectbill.page';

describe('ProjectbillPage', () => {
  let component: ProjectbillPage;
  let fixture: ComponentFixture<ProjectbillPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProjectbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
