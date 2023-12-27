import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestissementPage } from './investissement.page';

describe('InvestissementPage', () => {
  let component: InvestissementPage;
  let fixture: ComponentFixture<InvestissementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvestissementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
