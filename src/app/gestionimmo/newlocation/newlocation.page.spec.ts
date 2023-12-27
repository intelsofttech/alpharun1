import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewlocationPage } from './newlocation.page';

describe('NewlocationPage', () => {
  let component: NewlocationPage;
  let fixture: ComponentFixture<NewlocationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewlocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
