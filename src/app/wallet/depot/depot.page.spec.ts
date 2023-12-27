import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepotPage } from './depot.page';

describe('DepotPage', () => {
  let component: DepotPage;
  let fixture: ComponentFixture<DepotPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DepotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
