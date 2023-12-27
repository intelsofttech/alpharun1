import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuittanceprintPage } from './quittanceprint.page';

describe('QuittanceprintPage', () => {
  let component: QuittanceprintPage;
  let fixture: ComponentFixture<QuittanceprintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuittanceprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
