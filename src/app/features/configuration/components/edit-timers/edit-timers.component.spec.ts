import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimersComponent } from './edit-timers.component';

describe('EditTimersComponent', () => {
  let component: EditTimersComponent;
  let fixture: ComponentFixture<EditTimersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTimersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
