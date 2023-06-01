import { Image } from './loader-img.component';
import { ImageImpl } from './model/impl/image-impl';

export class DisplayImage {
  constructor(private imgPath: string) {}

  getImg(cover: string): Image | null {
    return cover !== null
      ? new ImageImpl(
          `${this.imgPath}/${cover}?random=${new Date().getTime()}`,
          cover
        )
      : null;
  }

  set imagePath(imgPath: string) {
    this.imgPath = imgPath;
  }
}
