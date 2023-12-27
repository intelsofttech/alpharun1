import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembrePage } from './membre.page';

describe('MembrePage', () => {
  let component: MembrePage;
  let fixture: ComponentFixture<MembrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MembrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
