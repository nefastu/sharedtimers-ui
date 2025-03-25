export interface ITimerDisplayGroup {
    id: string;
    // displayed ascending
    slot: number;
    // placeholder values will be shown if configured that way
    placeholderImageId: string;
    placeholderDisplayName: string;
    placeholderDescription: string;

    // if the current active timers are not running, display placeholder
    showPlaceholderWhenStopped: boolean;
    showPlaceholderUntilIntervalToNextEvent: boolean;
    intervalToNextEvent: number | undefined;
}