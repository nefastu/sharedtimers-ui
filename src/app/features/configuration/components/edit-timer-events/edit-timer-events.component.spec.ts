import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimerEventsComponent } from './edit-timer-events.component';

describe('EditTimerEventsComponent', () => {
  let component: EditTimerEventsComponent;
  let fixture: ComponentFixture<EditTimerEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTimerEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTimerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
