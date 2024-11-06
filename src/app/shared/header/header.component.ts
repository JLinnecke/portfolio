import { Component } from '@angular/core';
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
    this.currentLanguage = this.translate.currentLang || 'en';
  }

  toggleMenu() {
    if (this.isMenuOpen) {
      this.animateMenuIcon(false); // Animate closing
      this.router.navigate(['/']); // Navigate immediately
      this.isMenuOpen = false;
    } else {
      this.isMenuOpen = true;
      this.router.navigate(['/menu']); // Navigate immediately
      this.animateMenuIcon(true); // Animate opening
    }
  }

  animateMenuIcon(opening: boolean) {
    let index = opening ? 0 : this.images.length - 1;
    const interval = setInterval(() => {
      this.currentImageIndex = index;
      if (opening) {
        index++;
        if (index >= this.images.length) {
          clearInterval(interval);
          this.currentImageIndex = this.images.length - 1; // Set to the last image (close-menu)
        }
      } else {
        index--;
        if (index < 0) {
          clearInterval(interval);
          this.currentImageIndex = 0; // Set to the first image (burger-menu)
        }
      }
    }, 100); // Change image every 100ms
  }

  switchLanguage() {
    const newLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translate.use(newLanguage);
    this.currentLanguage = newLanguage;
  }
}