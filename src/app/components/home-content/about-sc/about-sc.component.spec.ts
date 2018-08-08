/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AboutScComponent } from './about-sc.component';

describe('AboutScComponent', () => {
  let component: AboutScComponent;
  let fixture: ComponentFixture<AboutScComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutScComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
