import { TestBed } from '@angular/core/testing';

import { ProductclassService } from './productclass.service';

describe('ProductclassService', () => {
  let service: ProductclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
