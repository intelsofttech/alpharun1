import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuittancepartnerPage } from './quittancepartner.page';

describe('QuittancepartnerPage', () => {
  let component: QuittancepartnerPage;
  let fixture: ComponentFixture<QuittancepartnerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuittancepartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
