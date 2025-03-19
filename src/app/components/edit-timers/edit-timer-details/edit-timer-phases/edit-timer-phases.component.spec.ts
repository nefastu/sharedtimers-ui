import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimerPhasesComponent } from './edit-timer-phases.component';

describe('EditTimerPhasesComponent', () => {
  let component: EditTimerPhasesComponent;
  let fixture: ComponentFixture<EditTimerPhasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTimerPhasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTimerPhasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
