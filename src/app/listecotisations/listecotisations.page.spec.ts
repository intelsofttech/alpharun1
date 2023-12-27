import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListecotisationsPage } from './listecotisations.page';

describe('ListecotisationsPage', () => {
  let component: ListecotisationsPage;
  let fixture: ComponentFixture<ListecotisationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListecotisationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
