import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlotPage } from './ilot.page';

describe('IlotPage', () => {
  let component: IlotPage;
  let fixture: ComponentFixture<IlotPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
