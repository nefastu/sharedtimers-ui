import { IImage } from "../resources/Image";

export interface IEncodedImage {
    image: IImage;
    base64: string | undefined;
}