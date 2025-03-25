import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageService } from '../../../shell/services/image/image.service';
import { CommonModule } from '@angular/common';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { IImage } from '../../../shell/models/resources/Image';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { IEncodedImage } from '../../../shell/models/serialization/EncodedImage';
import { ResourceSourceEnum } from '../../../shell/models/resources/ResourceSourceEnum';


@Component({
  selector: 'app-edit-resources',
  imports: [CardModule, ButtonModule, RouterLink, CommonModule, ConfirmPopupModule, ToastModule, CheckboxModule, FormsModule],
  templateUrl: './edit-resources.component.html',
  styleUrl: './edit-resources.component.scss'
})
export class EditResourcesComponent implements OnInit {
  public imageService = inject(ImageService);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  public imageExportMode: boolean = false;
  imagesToExport: string[] = [];


  confirmDelete(event: Event, image: IImage): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Do you want to delete image '${image.displayName}'?`,
      icon: 'pi pi-info-circle',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Delete image',
        severity: 'danger'
      },
      accept: () => {
        // delete image
        this.imageService.deleteImage(image.id);
        this.messageService.add({
          severity: 'info',
          summary: `Deleted image '${image.displayName}'` 
        });
      }
    })
  }

  toggleImageExport(event: any, imageId: string) {
    const checked = event.target.checked;
    const index = this.imagesToExport.indexOf(imageId);
    if (index === -1 && checked) {
      this.imagesToExport.push(imageId);
    }

    if (index !== -1 && !checked) {
      this.imagesToExport.splice(index, 1);
    }
  }

  exportSelectedImages() {
    const result: IEncodedImage[] = [];
    const images = this.imageService.getImages();
    for (const imageId of this.imagesToExport) {
      const exportImage = {
      } as IEncodedImage;
      const index = images.findIndex(a => a.id === imageId);
      if (index === -1) {
        continue;
      }
      exportImage.image = images[index];
      if (exportImage.image.source !== ResourceSourceEnum.External) {
        exportImage.base64 = this.imageService.getImageObjectUrl(imageId);
      }
      result.push(exportImage);
    }

    this.downloadJson(result, 'export.sharedtimers-images.json');
  }


  downloadJson(myJson: any, fileName: string){
    var sJson = JSON.stringify(myJson, null, 2);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }


  ngOnInit(): void {
  }
}
