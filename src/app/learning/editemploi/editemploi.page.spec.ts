import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditemploiPage } from './editemploi.page';

describe('EditemploiPage', () => {
  let component: EditemploiPage;
  let fixture: ComponentFixture<EditemploiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditemploiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
