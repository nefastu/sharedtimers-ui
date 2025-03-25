import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSetNewComponent } from './timer-set-new.component';

describe('TimerSetNewComponent', () => {
  let component: TimerSetNewComponent;
  let fixture: ComponentFixture<TimerSetNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerSetNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerSetNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
