import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeChambrePage } from './type-chambre.page';

describe('TypeChambrePage', () => {
  let component: TypeChambrePage;
  let fixture: ComponentFixture<TypeChambrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypeChambrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
