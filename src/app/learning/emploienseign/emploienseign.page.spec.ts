import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmploienseignPage } from './emploienseign.page';

describe('EmploienseignPage', () => {
  let component: EmploienseignPage;
  let fixture: ComponentFixture<EmploienseignPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmploienseignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
