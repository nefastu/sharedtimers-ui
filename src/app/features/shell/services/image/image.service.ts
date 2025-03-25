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
    const imagesResult = [] as IImage[];
    for (const imageId of imageIds) {
      const image = this.localStorageService.getImage(imageId);
      if (image !== null) {
        imagesResult.push(image);
      }
    }
    imagesResult.sort((a, b) => a.displayName.toLowerCase() < b.displayName.toLowerCase() ? -1 : 1);

    this.images = imagesResult;
  }

  public addImage(image: IImage, base64Data: string | undefined = undefined): void {
    this.localStorageService.setImage(image, base64Data);
    this.images.push(image);
  }

  public deleteImage(imageId: string): void {
    this.localStorageService.deleteImage(imageId);
    const index = this.images.findIndex(a => a.id === imageId);
    if (index !== -1) {
      this.images.splice(index, 1);
    }
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
