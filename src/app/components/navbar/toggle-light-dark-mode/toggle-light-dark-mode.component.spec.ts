import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleLightDarkModeComponent } from './toggle-light-dark-mode.component';

describe('ToggleLightDarkModeComponent', () => {
  let component: ToggleLightDarkModeComponent;
  let fixture: ComponentFixture<ToggleLightDarkModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleLightDarkModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleLightDarkModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
