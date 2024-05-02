import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTimersComponent } from './active-timers.component';

describe('ActiveTimersComponent', () => {
  let component: ActiveTimersComponent;
  let fixture: ComponentFixture<ActiveTimersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveTimersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveTimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
