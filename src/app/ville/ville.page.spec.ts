import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VillePage } from './ville.page';

describe('VillePage', () => {
  let component: VillePage;
  let fixture: ComponentFixture<VillePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
