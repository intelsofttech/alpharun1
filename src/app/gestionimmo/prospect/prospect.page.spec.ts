import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProspectPage } from './prospect.page';

describe('ProspectPage', () => {
  let component: ProspectPage;
  let fixture: ComponentFixture<ProspectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProspectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
