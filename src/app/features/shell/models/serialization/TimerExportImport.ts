import { ITimerSet } from "../TimerSet";
import { IEncodedImage } from "./EncodedImage";
import { IEncodedSound } from "./EncodedSound";

export interface ITimerExportImport {
    timerSet: ITimerSet;
    images: IEncodedImage[];
    sounds: IEncodedSound[];
}