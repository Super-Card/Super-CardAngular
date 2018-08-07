/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TechResultListComponent } from './tech-result-list.component';

describe('TechResultListComponent', () => {
  let component: TechResultListComponent;
  let fixture: ComponentFixture<TechResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
