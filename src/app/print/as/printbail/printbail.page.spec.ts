import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintbailPage } from './printbail.page';

describe('PrintbailPage', () => {
  let component: PrintbailPage;
  let fixture: ComponentFixture<PrintbailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrintbailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
