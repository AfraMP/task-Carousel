import { Component, signal } from '@angular/core';
import { ProductSection } from './product-section/product-section';
import { CommonModule } from '@angular/common';
import { $t, updatePreset, updateSurfacePalette } from '@primeuix/themes';
import { ButtonModule } from 'primeng/button';
import { CategorySection } from './category-section/category-section';
import { GeneralService } from './general-service';
@Component({
  selector: 'app-root',
  imports: [ProductSection, CommonModule, CategorySection, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isRtlLang: string;
  constructor(public general: GeneralService) {
    this.isRtlLang = this.general?.isRtl();
  }
  protected readonly title = signal('ecommerce');
  toggleLanguage() {
    const dir = this.general?.isRtl() === 'ltr' ? 'rtl' : 'ltr'
    console.log(dir)
    this.isRtlLang = dir;
    this.general.isRtl.set(dir)
    document.documentElement.dir = dir;
  }
}
