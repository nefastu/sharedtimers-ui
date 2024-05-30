import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSetSelectionComponent } from './timer-set-selection.component';

describe('TimerSetSelectionComponent', () => {
  let component: TimerSetSelectionComponent;
  let fixture: ComponentFixture<TimerSetSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerSetSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimerSetSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
