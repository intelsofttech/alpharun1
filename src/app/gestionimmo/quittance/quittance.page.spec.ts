import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuittancePage } from './quittance.page';

describe('QuittancePage', () => {
  let component: QuittancePage;
  let fixture: ComponentFixture<QuittancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuittancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
