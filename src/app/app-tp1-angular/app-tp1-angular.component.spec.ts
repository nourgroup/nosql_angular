import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTp1AngularComponent } from './app-tp1-angular.component';

describe('AppTp1AngularComponent', () => {
  let component: AppTp1AngularComponent;
  let fixture: ComponentFixture<AppTp1AngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTp1AngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTp1AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
