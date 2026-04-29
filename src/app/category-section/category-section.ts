import { Component, computed, effect, HostListener, OnInit, signal, WritableSignal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { GeneralService } from '../general-service';
@Component({
  selector: 'app-category-section',
  imports: [CarouselModule],
  templateUrl: './category-section.html',
  styleUrl: './category-section.css',
})
export class CategorySection implements OnInit{
  images: WritableSignal<{img: string, name: string}[]> = signal([]);
  mobileImage: any[][] = [];
  innerwidth: number = 0;

  responsiveOptions: any[] = [
        {
            breakpoint: '1400px',
            numVisible: 9,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 11,
            numScroll: 1
        }
    ];
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerwidth = window.innerWidth;
  }
  count = 0;
  displayImages = computed(() => {
    const imgs = this.images();
    return this.general.isRtl() === 'rtl' ? [...imgs].reverse() : imgs;
  });
  constructor(public general: GeneralService) {
    this.innerwidth = window.innerWidth;
  }
  ngOnInit() {
    let mobileImg = [];
    let imageData = [];
    for (let i = 0; i < 13; i++) {
      imageData.push({img: 'assets/image.svg', name: ('Category Name' + i)});
      if (i < 8) {
        mobileImg.push({'img':'assets/image.svg', name: 'Category Name'})
      }
    }
    this.images.set(imageData)
    this.mobileImage.push(mobileImg);
    this.mobileImage.push(mobileImg);
  }
}
