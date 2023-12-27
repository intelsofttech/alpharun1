import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditemploiclassonePage } from './editemploiclassone.page';

describe('EditemploiclassonePage', () => {
  let component: EditemploiclassonePage;
  let fixture: ComponentFixture<EditemploiclassonePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditemploiclassonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
