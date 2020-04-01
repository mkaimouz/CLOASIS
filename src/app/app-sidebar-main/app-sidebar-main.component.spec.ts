import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarMainComponent } from './app-sidebar-main.component';

describe('AppSidebarMainComponent', () => {
  let component: AppSidebarMainComponent;
  let fixture: ComponentFixture<AppSidebarMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidebarMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
