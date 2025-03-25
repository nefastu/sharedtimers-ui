import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageNewComponent } from './image-new.component';

describe('ImageNewComponent', () => {
  let component: ImageNewComponent;
  let fixture: ComponentFixture<ImageNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
