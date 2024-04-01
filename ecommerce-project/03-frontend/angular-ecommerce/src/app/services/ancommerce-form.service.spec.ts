import { TestBed } from '@angular/core/testing';

import { ANCommerceFormService } from './ancommerce-form.service';

describe('ANCommerceFormService', () => {
  let service: ANCommerceFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ANCommerceFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
