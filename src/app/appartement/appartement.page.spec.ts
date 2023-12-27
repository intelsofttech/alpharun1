import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppartementPage } from './appartement.page';

describe('AppartementPage', () => {
  let component: AppartementPage;
  let fixture: ComponentFixture<AppartementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppartementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
