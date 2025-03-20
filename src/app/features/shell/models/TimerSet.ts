import { IPhase } from "./Phase";
import { ITimerSound } from './TimerSound';
import { ITimerEvent } from './TimerEvent';
import { ITimerImage } from './TimerImage';

export interface ITimerSet {
    // randomly generated guid
    id: string;
    // friendly name
    displayName: string;
    // for timer selection
    group: string;
    created: Date;
    updated: Date;
    
    maxDuration: number;
    overrideTimerAdjustInterval: boolean;
    timerAdjustInterval: number;

    phases: IPhase[];

    events: ITimerEvent[];
    
    // sound library for timer set
    sounds: ITimerSound[];
    images: ITimerImage[];
}
