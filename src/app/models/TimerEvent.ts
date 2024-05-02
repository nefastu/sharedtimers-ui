export interface ITimerEvent {
    id: string;
    displayName: string;
    description: string;
    duration: number;
    displayNameWhileActive: string;
    descriptionWhileActive: string;
    playSoundBeforeStart: boolean;
    playSoundBeforeStartName: string;
    playSoundBeforeStartOffset: number;
    playSoundBeforeEnd: boolean;
    playSoundBeforeEndName: string;
    playSoundBeforeEndOffset: number;
    swapIndex: number;
    imageName: string;
    imageNameWhileActive: string;
}