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
  isHoveredJoin = false;
  isHoveredPollo = false;
  
  openLink(url: string): void {
    window.open(url, '_blank');
  }

  toggleHoverJoin(state: boolean) {
    this.isHoveredJoin = state;
  }

  toggleHoverPollo(state: boolean) {
    this.isHoveredPollo = state;
  }
}
