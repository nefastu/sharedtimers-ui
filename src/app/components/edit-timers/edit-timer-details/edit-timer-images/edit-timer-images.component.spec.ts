import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimerImagesComponent } from './edit-timer-images.component';

describe('EditTimerImagesComponent', () => {
  let component: EditTimerImagesComponent;
  let fixture: ComponentFixture<EditTimerImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTimerImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTimerImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
