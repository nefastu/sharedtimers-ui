import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FileImportComponent } from '../../file-import/file-import.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { IImage } from '../../../../shell/models/resources/Image';
import { ResourceSourceEnum } from '../../../../shell/models/resources/ResourceSourceEnum';
import { TooltipModule } from 'primeng/tooltip';
import { ImageRenderingMode } from '../../../../shell/models/resources/ImageRenderingMode';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import mime from 'mime';
import { ImageService } from '../../../../shell/services/image/image.service';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-image-new',
  imports: [CardModule, ButtonModule, FileImportComponent, SelectButtonModule, FormsModule, TooltipModule, CommonModule, InputTextModule, RouterLink],
  templateUrl: './image-new.component.html',
  styleUrl: './image-new.component.scss'
})
export class ImageNewComponent {
  private imageService = inject(ImageService);
  private messageService = inject(MessageService);
  private router = inject(Router);
  importOptions: any[] = [
    { label: 'Import from your device', value: 'file' },
    { label: 'Add external image', value: 'external' }
  ];

  renderingModeOptions: any[] = [
    { label: 'Auto', value: 'auto' },
    { label: 'Smooth', value: 'smooth' },
    { label: 'Crisp edges', value: 'crisp-edges' },
    { label: 'Pixelated', value: 'pixelated' }
  ]

  importMode: string = 'file';

  image: IImage = {
    id: uuidv4(),
    displayName: '',
    extension: '',
    source: ResourceSourceEnum.LocalBrowser,
    externalUrl: undefined,
    renderingMode: ImageRenderingMode.Auto
  };

  uploadedFile: File | undefined = undefined;
  imageObjectUrl: string | undefined = undefined;


  onFileUpload(file: File): void {
    this.image.source = ResourceSourceEnum.LocalBrowser;
    this.uploadedFile = file;
    this.imageObjectUrl = URL.createObjectURL(file);
    const extension = mime.getExtension(file.type);
    if (extension !== null) {
      this.image.extension = extension;
    }
  }

  removeUploadedFile() {
    this.uploadedFile = undefined;
    this.imageObjectUrl = undefined;
  }

  loadExternalImage() {
    if (this.image.externalUrl) {
      this.image.source = ResourceSourceEnum.External;
      this.imageObjectUrl = this.image.externalUrl;
    }
  }

  addImage() {
    if (this.uploadedFile) {
      this.toBase64(this.uploadedFile).then((base64Data) => {
        this.imageService.addImage(this.image, base64Data as string);
        this.afterAddImage();

      }).catch((error) => {
        console.error(error);
        this.messageService.add({
          summary: 'Failed to get data from image',
          severity: 'danger'
        });
      });
    } else {
      this.imageService.addImage(this.image);
      this.afterAddImage();
    }
  }

  private afterAddImage() {
    this.messageService.add({
      summary: `Added image ${this.image.displayName}`,
      severity: 'success'
    });

    this.router.navigate(['/configuration/resources']);

  }


  // from https://gist.github.com/marco-souza/552f94f87059fdeeef35e95d1680de84
  private toBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}
