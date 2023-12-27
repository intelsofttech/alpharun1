import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypefraisPage } from './typefrais.page';

describe('TypefraisPage', () => {
  let component: TypefraisPage;
  let fixture: ComponentFixture<TypefraisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypefraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
