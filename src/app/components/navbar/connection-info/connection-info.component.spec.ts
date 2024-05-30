import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionInfoComponent } from './connection-info.component';

describe('ConnectionInfoComponent', () => {
  let component: ConnectionInfoComponent;
  let fixture: ComponentFixture<ConnectionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectionInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
