import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembregroupePage } from './membregroupe.page';

describe('MembregroupePage', () => {
  let component: MembregroupePage;
  let fixture: ComponentFixture<MembregroupePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MembregroupePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
