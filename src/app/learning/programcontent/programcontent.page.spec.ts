import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramcontentPage } from './programcontent.page';

describe('ProgramcontentPage', () => {
  let component: ProgramcontentPage;
  let fixture: ComponentFixture<ProgramcontentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProgramcontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
