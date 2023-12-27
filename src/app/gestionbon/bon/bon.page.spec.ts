import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BonPage } from './bon.page';

describe('BonPage', () => {
  let component: BonPage;
  let fixture: ComponentFixture<BonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
