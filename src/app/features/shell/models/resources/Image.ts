import { ImageRenderingMode } from "./ImageRenderingMode";
import { IResource } from "./Resource";

export interface IImage extends IResource {
    renderingMode: ImageRenderingMode;
    
}