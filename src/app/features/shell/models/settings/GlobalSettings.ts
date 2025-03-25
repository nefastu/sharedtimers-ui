import { IHotkey } from "./Hotkey";

export interface IGlobalSettings {
    defaultVolume: number;
    defaultTimerAdjustInterval: number;
    hotkeys: IHotkey[];
}