import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfignotePage } from './confignote.page';

describe('ConfignotePage', () => {
  let component: ConfignotePage;
  let fixture: ComponentFixture<ConfignotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfignotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
