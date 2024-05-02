import { HotKeyEnum } from "./HotkeyEnum";
import { IKeyWithModifiers } from "./KeyWithModifiers";

export interface IHotkey {
    type: HotKeyEnum;
    keyWithModifiers: IKeyWithModifiers;
    isGlobalHotkey: boolean;
    isHandlingKeyEvent: boolean;
    associatedGroup: number;
}