import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlotstatusPage } from './ilotstatus.page';

describe('IlotstatusPage', () => {
  let component: IlotstatusPage;
  let fixture: ComponentFixture<IlotstatusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlotstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
