import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColisPage } from './colis.page';

describe('ColisPage', () => {
  let component: ColisPage;
  let fixture: ComponentFixture<ColisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ColisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
