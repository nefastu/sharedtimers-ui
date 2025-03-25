import { Injectable } from '@angular/core';
import { IGlobalSettings } from '../../models/settings/GlobalSettings';
import { ITimerSet } from '../../models/TimerSet';
import { ITimerSelectionEntry } from '../../models/TimerSelectionEntry';
import { IImage } from '../../models/resources/Image';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private KEY_GLOBALSETTINGS = 'sharedtimers_globalsettings';
  private KEY_TIMERSELECTION = 'sharedtimers_timerselection';
  private KEY_IMAGES = 'sharedtimers_images';

  private PREFIX_TIMERSET = 'sharedtimers_timerset_';
  private PREFIX_IMAGE = 'sharedtimers_image_';
  private PREFIX_IMAGEDATA = 'sharedtimers_imagedata_';


  get globalSettings(): IGlobalSettings | null {
    return this.getLocalStorageEntry<IGlobalSettings>(this.KEY_GLOBALSETTINGS);
  }

  set globalSettings(value: IGlobalSettings) {
    localStorage.setItem(this.KEY_GLOBALSETTINGS, JSON.stringify(value));
  }

  get timerSelection(): ITimerSelectionEntry[] {
    const valueFromLocalStorage = this.getLocalStorageEntry<ITimerSelectionEntry[]>(this.KEY_TIMERSELECTION);
    if (valueFromLocalStorage === null) {
      return [];
    }
    return valueFromLocalStorage;
  }

  set timerSelection(value: ITimerSelectionEntry[]) {
    localStorage.setItem(this.KEY_TIMERSELECTION, JSON.stringify(value));
  }

  constructor() { }

  public setTimerSet(timerSet: ITimerSet) {
    localStorage.setItem(this.PREFIX_TIMERSET + timerSet.id, JSON.stringify(timerSet));
  }

  public getTimerSet(timerSetId: string): ITimerSet | null {
    return this.getLocalStorageEntry<ITimerSet>(this.PREFIX_TIMERSET + timerSetId);
  }

  get images(): string[] {
    const valueFromLocalStorage = this.getLocalStorageEntry<string[]>(this.KEY_IMAGES);
    if (valueFromLocalStorage === null) {
      return [];
    }
    return valueFromLocalStorage;
  }

  public setImage(image: IImage, base64Data: string | undefined = undefined) {
    localStorage.setItem(this.PREFIX_IMAGE + image.id, JSON.stringify(image));
    if (base64Data !== undefined) {
      localStorage.setItem(this.PREFIX_IMAGEDATA + image.id, JSON.stringify(base64Data));
    }
    const updatedImagesList = this.images;
    updatedImagesList.push(image.id);
    localStorage.setItem(this.KEY_IMAGES, JSON.stringify(updatedImagesList));
  }

  public getImage(imageId: string): IImage | null {
    return this.getLocalStorageEntry<IImage>(this.PREFIX_IMAGE + imageId);
  }

  public deleteImage(imageId: string): void {
    localStorage.removeItem(this.PREFIX_IMAGE + imageId);
    localStorage.removeItem(this.PREFIX_IMAGEDATA + imageId);

    const updatedImagesList = this.images;
    const index = updatedImagesList.indexOf(imageId);
    if (index !== -1) {
      updatedImagesList.splice(index, 1);
    }
    localStorage.setItem(this.KEY_IMAGES, JSON.stringify(updatedImagesList));
  }

  public getImageData(imageId: string): string | null {
    return this.getLocalStorageEntry<string>(this.PREFIX_IMAGEDATA + imageId);
  }

  private getLocalStorageEntry<T>(key: string): T | null {
    const rawValue = localStorage.getItem(key);
    if (rawValue !== null) {
      const parsedValue = JSON.parse(rawValue) as T;
      return parsedValue;
    }
    return rawValue;
  }
}
