import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTimerSetComponent } from './import-timer-set.component';

describe('ImportTimerSetComponent', () => {
  let component: ImportTimerSetComponent;
  let fixture: ComponentFixture<ImportTimerSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportTimerSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportTimerSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
