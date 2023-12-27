import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditquittancePage } from './editquittance.page';

describe('EditquittancePage', () => {
  let component: EditquittancePage;
  let fixture: ComponentFixture<EditquittancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditquittancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
