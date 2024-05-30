export interface ITimerSound {
    // friendly name used in timers
    name: string;
    // if timer event selects group
    group: string;
    // if timer event selects group, chance this sound is played (positive number)
    groupWeight: number;
    // set when uploaded to timer set
    fileName: string;
    base64Data: string;
    extension: string;
}