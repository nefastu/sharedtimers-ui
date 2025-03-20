import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimerPhaseComponent } from './edit-timer-phase.component';

describe('EditTimerPhaseComponent', () => {
  let component: EditTimerPhaseComponent;
  let fixture: ComponentFixture<EditTimerPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTimerPhaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTimerPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
