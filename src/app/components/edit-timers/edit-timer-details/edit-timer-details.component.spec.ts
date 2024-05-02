import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimerDetailsComponent } from './edit-timer-details.component';

describe('EditTimerDetailsComponent', () => {
  let component: EditTimerDetailsComponent;
  let fixture: ComponentFixture<EditTimerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTimerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTimerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
