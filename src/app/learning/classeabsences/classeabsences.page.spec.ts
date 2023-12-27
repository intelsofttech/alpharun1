import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasseabsencesPage } from './classeabsences.page';

describe('ClasseabsencesPage', () => {
  let component: ClasseabsencesPage;
  let fixture: ComponentFixture<ClasseabsencesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClasseabsencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
