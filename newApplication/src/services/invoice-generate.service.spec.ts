import { TestBed } from '@angular/core/testing';

import { InvoiceGenerateService } from './invoice-generate.service';

describe('InvoiceGenerateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceGenerateService = TestBed.get(InvoiceGenerateService);
    expect(service).toBeTruthy();
  });
});
