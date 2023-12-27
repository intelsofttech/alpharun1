import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MouvementproduitPage } from './mouvementproduit.page';

describe('MouvementproduitPage', () => {
  let component: MouvementproduitPage;
  let fixture: ComponentFixture<MouvementproduitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MouvementproduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
