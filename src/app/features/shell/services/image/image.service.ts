import { inject, Injectable } from '@angular/core';
import { IImage } from '../../models/resources/Image';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private localStorageService = inject(LocalStorageService);

  private images: IImage[] = [];
  private notFoundImage = 'http://localhost:4200/images/not-found.svg';

  constructor() {
    this.loadImagesFromLocalStorage();
  }

  private loadImagesFromLocalStorage() {
    const imageIds = this.localStorageService.images;
    for (const imageId of imageIds) {
      const image = this.localStorageService.getImage(imageId);
      if (image !== null) {
        this.images.push(image);
      }
    }
  }

  public addImage(image: IImage, base64Data: string | undefined = undefined) {
    this.localStorageService.setImage(image, base64Data);
    this.images.push(image);
  }

  public getImages(): IImage[] {
    return this.images;
  }

  public getImageObjectUrl(id: string): string {
    const image = this.images.find(a => a.id === id);
    if (image === undefined) {
      return this.notFoundImage;
    }
    if (image.externalUrl) {
      return image.externalUrl;
    }

    const base64ImageData = this.localStorageService.getImageData(id);
    if (base64ImageData) {
      return base64ImageData;
    }
    return this.notFoundImage;
  }
}
