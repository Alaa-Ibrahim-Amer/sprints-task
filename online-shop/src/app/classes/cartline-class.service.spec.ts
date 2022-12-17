import { TestBed } from '@angular/core/testing';

import { CartlineClassService } from './cartline-class.service';

describe('CartlineClassService', () => {
  let service: CartlineClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartlineClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
