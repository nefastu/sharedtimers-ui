import { IResource } from "./Resource";

export interface ISound extends IResource {
    // if timer event references multiple sounds via group
    group: string | undefined;
    // if timer event selects sound via group, calculate chance to play with group weights for each sound
    groupWeight: number | undefined;
}