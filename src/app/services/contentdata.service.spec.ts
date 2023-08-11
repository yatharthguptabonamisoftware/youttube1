import { TestBed } from '@angular/core/testing';

import { ContentdataService } from './contentdata.service';

describe('ContentdataService', () => {
  let service: ContentdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
