import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbacloginComponent } from './rbaclogin.component';

describe('RbacloginComponent', () => {
  let component: RbacloginComponent;
  let fixture: ComponentFixture<RbacloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbacloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbacloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
