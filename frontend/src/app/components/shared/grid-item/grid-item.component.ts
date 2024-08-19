import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GridItem } from '../../../models/grid-item.interface';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-grid-item',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.scss',
})
export class GridItemComponent {
  @Input() item!: GridItem;

  constructor(private router: Router) {}

  navigateTo(item: GridItem | undefined): void {
    if (item) {
      const path = item.content.navPath;

      if (path) {
        const url = this.router.serializeUrl(this.router.createUrlTree([path]));
        window.open(url, '_blank');
      } else {
        console.error('Navigation path is not provided.');
      }
    }
  }
}
