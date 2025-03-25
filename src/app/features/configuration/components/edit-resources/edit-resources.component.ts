import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageService } from '../../../shell/services/image/image.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-resources',
  imports: [CardModule, ButtonModule, RouterLink, CommonModule],
  templateUrl: './edit-resources.component.html',
  styleUrl: './edit-resources.component.scss'
})
export class EditResourcesComponent implements OnInit {
  public imageService = inject(ImageService);




  ngOnInit(): void {
  }
}
