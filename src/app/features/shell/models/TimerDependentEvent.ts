import { DependentEventDisplayModeEnum } from "./DependentEventDisplayModeEnum";

export interface ITimerDependentEvent {
    timerIdOrGroup: string;
    displayMode: DependentEventDisplayModeEnum;
    duration: number;
}