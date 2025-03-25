import { ITimerDependentEvent } from "./TimerDependentEvent";
import { ITimerEventSound } from "./TimerEventSound";
import { TimerEventTypeEnum } from "./TimerEventTypeEnum";

export interface ITimerEvent {
    id: string;
    eventType: TimerEventTypeEnum;
    displayName: string;
    description: string;
    // groups similar timer events, for dependent events that apply to multiple timer events
    group: string;
    // image id
    image: string;
    sounds: ITimerEventSound[];
    dependentEvent: ITimerDependentEvent | undefined;
}