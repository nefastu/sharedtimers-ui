import { TimerSetSourceEnum } from "./TimerSetSourceEnum";

export interface ITimerSelectionEntry {
    // randomly generated guid
    id: string;
    source: TimerSetSourceEnum;
    // friendly name
    displayName: string;
    // for timer selection
    group: string;
    subgroup: string | undefined;
    created: Date;
    updated: Date;
}