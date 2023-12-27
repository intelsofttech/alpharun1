import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaissesultationPage } from './caissesultation.page';

describe('CaissesultationPage', () => {
  let component: CaissesultationPage;
  let fixture: ComponentFixture<CaissesultationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaissesultationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
