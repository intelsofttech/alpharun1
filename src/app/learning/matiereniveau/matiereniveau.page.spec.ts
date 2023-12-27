import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatiereniveauPage } from './matiereniveau.page';

describe('MatiereniveauPage', () => {
  let component: MatiereniveauPage;
  let fixture: ComponentFixture<MatiereniveauPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatiereniveauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
