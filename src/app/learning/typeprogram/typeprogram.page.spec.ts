import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeprogramPage } from './typeprogram.page';

describe('TypeprogramPage', () => {
  let component: TypeprogramPage;
  let fixture: ComponentFixture<TypeprogramPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypeprogramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
