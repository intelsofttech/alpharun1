import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChiffredaffairePage } from './chiffredaffaire.page';

describe('ChiffredaffairePage', () => {
  let component: ChiffredaffairePage;
  let fixture: ComponentFixture<ChiffredaffairePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChiffredaffairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
