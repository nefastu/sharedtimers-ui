export interface IPhaseEvent {
    hotkeyGroup: number;
    order: number;
    // -1 is indefinite
    timesRepeated: number;
    interval: number;
    startIntervalFromStart: boolean;
    offsetFromStart: number;
}