export interface IPhaseEvent {
    id: string;
    hotkeyGroup: number;
    order: number;
    // -1 is indefinite
    timesRepeated: number;
    interval: number;
    startIntervalFromStart: boolean;
    offsetFromStart: number;
    timerEventId: string;
}