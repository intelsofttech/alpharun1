import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditemploienseignonePage } from './editemploienseignone.page';

describe('EditemploienseignonePage', () => {
  let component: EditemploienseignonePage;
  let fixture: ComponentFixture<EditemploienseignonePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditemploienseignonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
