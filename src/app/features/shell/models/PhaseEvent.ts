export interface IPhaseEvent {
    id: string;
    // -1 is indefinite
    timesRepeated: number;
    interval: number;
    startIntervalFromStart: boolean;
    offsetFromStart: number;
    timerEventId: string;
    // points to id of ITimerDisplayGroup
    displayGroup: string;
}