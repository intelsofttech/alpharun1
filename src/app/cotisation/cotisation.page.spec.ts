import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CotisationPage } from './cotisation.page';

describe('CotisationPage', () => {
  let component: CotisationPage;
  let fixture: ComponentFixture<CotisationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CotisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
