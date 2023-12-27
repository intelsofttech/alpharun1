import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulletinpaiePage } from './bulletinpaie.page';

describe('BulletinpaiePage', () => {
  let component: BulletinpaiePage;
  let fixture: ComponentFixture<BulletinpaiePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BulletinpaiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
