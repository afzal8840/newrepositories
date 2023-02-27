import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTagsComponent } from './html-tags.component';

describe('HtmlTagsComponent', () => {
  let component: HtmlTagsComponent;
  let fixture: ComponentFixture<HtmlTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
