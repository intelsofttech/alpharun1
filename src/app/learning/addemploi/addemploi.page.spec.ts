import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddemploiPage } from './addemploi.page';

describe('AddemploiPage', () => {
  let component: AddemploiPage;
  let fixture: ComponentFixture<AddemploiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddemploiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
