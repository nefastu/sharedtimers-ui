import { ITimerDisplayGroup } from "./display/TimerDisplayGroup";
import { IPhase } from "./Phase";
import { ITimerEvent } from './TimerEvent';

export interface ITimerSet {
    // randomly generated guid
    id: string;
    // friendly name
    displayName: string;
    // for timer selection
    group: string;
    // for timer selection
    subgroup: string | undefined;
    created: Date;
    updated: Date;
    
    maxDuration: number;
    overrideTimerAdjustInterval: boolean;
    timerAdjustInterval: number;

    phases: IPhase[];

    events: ITimerEvent[];
    
    // sound library for timer set
    soundIds: string[];
    imageIds: string[];
    displayGroups: ITimerDisplayGroup[];
}
