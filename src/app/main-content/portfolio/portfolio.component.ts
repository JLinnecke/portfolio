import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  isHovered = false;
  
  openLink(url: string): void {
    window.open(url, '_blank');
  }

  toggleHover(state: boolean) {
    this.isHovered = state;
  }
}
