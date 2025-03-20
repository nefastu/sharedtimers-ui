import { TestBed } from '@angular/core/testing';

import { TimerEditorService } from './timer-editor.service';

describe('TimerEditorService', () => {
  let service: TimerEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
