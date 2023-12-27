import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresencePage } from './presence.page';

describe('PresencePage', () => {
  let component: PresencePage;
  let fixture: ComponentFixture<PresencePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PresencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
