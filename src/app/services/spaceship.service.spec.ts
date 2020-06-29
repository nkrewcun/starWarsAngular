import { TestBed } from '@angular/core/testing';

import { SpaceshipService } from './spaceship.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SpaceshipService', () => {
  let service: SpaceshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(SpaceshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
