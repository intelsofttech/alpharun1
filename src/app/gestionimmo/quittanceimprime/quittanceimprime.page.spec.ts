import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuittanceimprimePage } from './quittanceimprime.page';

describe('QuittanceimprimePage', () => {
  let component: QuittanceimprimePage;
  let fixture: ComponentFixture<QuittanceimprimePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuittanceimprimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
