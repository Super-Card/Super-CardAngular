/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeautyService } from './beauty.service';

describe('BeautyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeautyService]
    });
  });

  it('should ...', inject([BeautyService], (service: BeautyService) => {
    expect(service).toBeTruthy();
  }));
});
