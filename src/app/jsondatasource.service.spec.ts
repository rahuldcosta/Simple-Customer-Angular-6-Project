import { TestBed } from '@angular/core/testing';

import { JsondatasourceService } from './jsondatasource.service';

describe('JsondatasourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsondatasourceService = TestBed.get(JsondatasourceService);
    expect(service).toBeTruthy();
  });
});
