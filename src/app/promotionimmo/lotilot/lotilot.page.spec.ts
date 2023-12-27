import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LotilotPage } from './lotilot.page';

describe('LotilotPage', () => {
  let component: LotilotPage;
  let fixture: ComponentFixture<LotilotPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LotilotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
