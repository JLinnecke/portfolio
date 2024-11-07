import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuComponent } from './menu/menu.component';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, MainContentComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Johannes Linnecke';
  isMenuOpen = false;
  fragment: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private translate: TranslateService) {}

  ngOnInit() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.use(savedLanguage);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.route.fragment.subscribe(fragment => {
        this.fragment = fragment;
        if (!this.isMenuOpen && fragment) {
          this.scrollToFragment(fragment);
        }
      });
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (this.fragment) {
        this.scrollToFragment(this.fragment);
        this.fragment = null;
      }
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
    if (this.fragment) {
      this.scrollToFragment(this.fragment);
      this.fragment = null;
    }
  }

  private scrollToFragment(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}