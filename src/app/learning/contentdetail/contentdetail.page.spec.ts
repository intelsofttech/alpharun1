import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentdetailPage } from './contentdetail.page';

describe('ContentdetailPage', () => {
  let component: ContentdetailPage;
  let fixture: ComponentFixture<ContentdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContentdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
