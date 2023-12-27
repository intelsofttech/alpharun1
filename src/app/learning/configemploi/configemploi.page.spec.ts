import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigemploiPage } from './configemploi.page';

describe('ConfigemploiPage', () => {
  let component: ConfigemploiPage;
  let fixture: ComponentFixture<ConfigemploiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfigemploiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
