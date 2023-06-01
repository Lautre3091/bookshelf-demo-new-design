import { AsyncPipe, NgIf } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

export interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-loader-img',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  template: `
    <div class="container">
      <div class="loader" *ngIf="loading">
        load....
      </div>
      <div class="cover">
        <img [hidden]="loading"
             (error)="onError()"
             (load)="onLoad()"
             [src]="src"
             [alt]="alt"/>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      aspect-ratio: 150/240;

      .loader {
        display: flex;
        justify-content: center;
      }

      .cover {
        display: flex;
        align-content: center;
        img {
          width: 100%;
        }
      }
    }
  `,
  ],
})
export class LoaderImgComponent implements OnInit, OnChanges {
  @Input() img: Image | null = null;
  @Input() imgContainerClass: string | null = null;

  private defaultImg = {
    src: 'assets/images/no_cover.svg',
    alt: 'No cover found',
  };

  public src!: string;
  public alt!: string;

  public loading = true;

  onLoad() {
    this.loading = false;
  }

  onError() {
    this.loading = false;
    this.loadImg(this.defaultImg);
  }

  ngOnInit() {
    this.loadImg(this.img !== null ? this.img : this.defaultImg);
  }

  loadImg(img: Image | null) {
    this.alt = img?.alt ?? '';
    this.src = img?.src ?? '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadImg(this.img !== null ? this.img : this.defaultImg);
  }
}
