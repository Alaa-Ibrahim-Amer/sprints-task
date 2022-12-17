import { TestBed } from '@angular/core/testing';

import { CartClassService } from './cart-class.service';

describe('CartClassService', () => {
  let service: CartClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
