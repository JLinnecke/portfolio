import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();

  isMenuOpen = false;
  currentImageIndex = 0;
  images = [
    'assets/header_imgs/burger.png',
    'assets/header_imgs/trans1.png',
    'assets/header_imgs/trans2.png',
    'assets/header_imgs/trans3.png',
    'assets/header_imgs/close.png',
  ];
  currentLanguage: string;

  constructor(private router: Router, private translate: TranslateService) {
    this.currentLanguage = localStorage.getItem('language') || 'en';
    this.translate.use(this.currentLanguage);
  }

  toggleMenu() {
    this.menuToggle.emit();
  }

  animateMenuIcon(opening: boolean) {
    let index = opening ? 0 : this.images.length - 1;
    const interval = setInterval(() => {
      this.currentImageIndex = index;
      if (opening) {
        index++;
        if (index >= this.images.length) {
          clearInterval(interval);
          this.currentImageIndex = this.images.length - 1;
        }
      } else {
        index--;
        if (index < 0) {
          clearInterval(interval);
          this.currentImageIndex = 0;
        }
      }
    }, 100);
  }

  switchLanguage() {
    const newLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translate.use(newLanguage);
    this.currentLanguage = newLanguage;
    localStorage.setItem('language', newLanguage);
  }
}