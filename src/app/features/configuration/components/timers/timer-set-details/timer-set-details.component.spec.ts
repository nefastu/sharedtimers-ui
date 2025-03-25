import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSetDetailsComponent } from './timer-set-details.component';

describe('TimerSetDetailsComponent', () => {
  let component: TimerSetDetailsComponent;
  let fixture: ComponentFixture<TimerSetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerSetDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerSetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
