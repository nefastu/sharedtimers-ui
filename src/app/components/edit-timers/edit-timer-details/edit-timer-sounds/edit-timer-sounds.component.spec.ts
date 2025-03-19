import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimerSoundsComponent } from './edit-timer-sounds.component';

describe('EditTimerSoundsComponent', () => {
  let component: EditTimerSoundsComponent;
  let fixture: ComponentFixture<EditTimerSoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTimerSoundsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTimerSoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
