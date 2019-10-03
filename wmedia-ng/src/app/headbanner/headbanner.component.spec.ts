import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadbannerComponent } from './headbanner.component';

describe('HeadbannerComponent', () => {
  let component: HeadbannerComponent;
  let fixture: ComponentFixture<HeadbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
