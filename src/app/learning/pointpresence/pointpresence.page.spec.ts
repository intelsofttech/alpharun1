import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PointpresencePage } from './pointpresence.page';

describe('PointpresencePage', () => {
  let component: PointpresencePage;
  let fixture: ComponentFixture<PointpresencePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PointpresencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
