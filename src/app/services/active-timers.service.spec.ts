import { TestBed } from '@angular/core/testing';

import { ActiveTimersService } from './active-timers.service';

describe('ActiveTimersService', () => {
  let service: ActiveTimersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveTimersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
