import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtablissementPage } from './etablissement.page';

describe('EtablissementPage', () => {
  let component: EtablissementPage;
  let fixture: ComponentFixture<EtablissementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EtablissementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
