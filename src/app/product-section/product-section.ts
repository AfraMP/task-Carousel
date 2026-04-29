import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Renderer2, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GeneralService } from '../general-service';
// import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-product-section',
  imports: [CarouselModule, ButtonModule, CommonModule],
  templateUrl: './product-section.html',
  styleUrl: './product-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSection {

  selectedBrandId: number = 1;
  responsiveOptions: any[] | undefined;
  products: any;
  carouselButton1: any = { class: 'rounded-full' };
  maxRating: number = 5;
  brands = [
    { id: 1, name: 'Promate', banner: 'assets/banner1.png' },
    { id: 2, name: 'Apple', banner: 'assets/banner2.png' },
    { id: 3, name: 'Samsung', banner: 'assets/banner3.png' }
  ];

  bannerImages = ['assets/bannerBg.svg', 'assets/shoes.jpg']
  Allproducts = [
    { id: 1, brandId: 1, name: 'Regular Fit Slogan Regular Fit Rgulars s  ss', discount_percent: 14, discounted_price: 200, price: 1200, images: ['assets/iphone3.svg',  'assets/iphone.jpeg', 'assets/iphone1.jpeg', 'assets/headphone.jpeg'], rating: 4.5, customer_rating_count: 125 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 12, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg', 'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 98 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 12, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg', 'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 98 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 12, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg', 'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 98 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 12, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg', 'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 98 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 12, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg', 'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 98 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 12, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg', 'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 98 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 12, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg', 'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 98 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 12, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg', 'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 98 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 12, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg', 'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 98 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 12, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg', 'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 98 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 12, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg', 'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 98 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 12, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg', 'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 98 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 14, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg',  'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 34 },
    { id: 1, brandId: 1, name: 'iPhone 15', discount_percent: 14, discounted_price: 12, price: 1200, images: ['assets/iphone3.svg',  'assets/iphone1.jpeg'], rating: 2, customer_rating_count: 34 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12,  discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 3, customer_rating_count: 122 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 67 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 56 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 56 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 56 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 56 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 56 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 56 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 56 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 56 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 56 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 56 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 56 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/headphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 67 },
    { id: 2, brandId: 2, name: 'Headphones', discount_percent: 12, discounted_price: 12, price: 200, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 56 },
    { id: 3, brandId: 3, name: 'MacBook', discount_percent: 12, discounted_price: 12, price: 2500, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 1, customer_rating_count: 34 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 },
    { id: 4, brandId: 4, name: 'Galaxy S24', discount_percent: 12, discounted_price: 12, price: 1100, images: ['assets/iphone.jpeg', 'assets/iphone1.jpeg'], rating: 4, customer_rating_count: 2 }
  ];
  innerwidth: number = 0;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerwidth = window.innerWidth;
  }
  constructor(private renderer: Renderer2, public general: GeneralService) {
    this.innerwidth = window.innerWidth
  }
  ngOnInit() {
    if (this.innerwidth < 767) {
      this.bannerImages = ['assets/mobilBg.png', 'assets/mobilBg.png']
    }
    this.products = signal(this.Allproducts?.filter((product) => product?.brandId === 1))
    this.responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 6,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 2,
            numScroll: 1
        }
    ];
  }

  filteredProducts() {
    this.products.set(this.Allproducts?.filter((product) => product?.brandId === this.selectedBrandId));
    console.log(this.products)
  }

  onIndicatorKeydown() {

  }
  onBannerChange(event: {id: number}) {
    this.selectedBrandId = this.brands?.[event?.id]?.id;
  }

  onNavigatorClick(event: any) {
    console.log(event)
    this.selectedBrandId = event?.page + 1;
    this.filteredProducts();
  }
  onViewMore() {

  }
}
