import { TestBed, inject } from '@angular/core/testing';

import { ImessageService } from './imessage.service';

describe('ImessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImessageService]
    });
  });

  it('should be created', inject([ImessageService], (service: ImessageService) => {
    expect(service).toBeTruthy();
  }));
});
