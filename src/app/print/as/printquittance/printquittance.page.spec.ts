import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintquittancePage } from './printquittance.page';

describe('PrintquittancePage', () => {
  let component: PrintquittancePage;
  let fixture: ComponentFixture<PrintquittancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrintquittancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
