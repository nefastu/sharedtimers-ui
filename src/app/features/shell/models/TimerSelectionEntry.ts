export interface ITimerSelectionEntry {
    // randomly generated guid
    id: string;
    // friendly name
    displayName: string;
    // for timer selection
    group: string;
    created: Date;
    updated: Date;
}