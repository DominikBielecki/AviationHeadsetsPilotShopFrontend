import { TestBed } from '@angular/core/testing';

import { AviationShopFormService } from './aviation-shop-form.service';

describe('AviationShopFormService', () => {
  let service: AviationShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AviationShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
