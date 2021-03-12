import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrireComponent } from './ecrire.component';

describe('EcrireComponent', () => {
  let component: EcrireComponent;
  let fixture: ComponentFixture<EcrireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcrireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcrireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
