import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaissePage } from './caisse.page';

describe('CaissePage', () => {
  let component: CaissePage;
  let fixture: ComponentFixture<CaissePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaissePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
