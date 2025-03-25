import { ResourceSourceEnum } from "./ResourceSourceEnum";

export interface IResource {
    // generated when saved
    id: string;
    // friendly name when selected in configuration
    displayName: string;
    extension: string;
    source: ResourceSourceEnum;
    externalUrl: string | undefined;
}