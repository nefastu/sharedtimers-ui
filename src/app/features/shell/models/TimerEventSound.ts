export interface ITimerEventSound {
    soundIdOrGroup: string;
    // positive = ealier; relative to event or dependent event duration end
    offset: number;
}