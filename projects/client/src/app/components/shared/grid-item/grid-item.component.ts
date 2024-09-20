import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GridItem } from '../../../models/grid-item.interface';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-grid-item',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.scss',
})
export class GridItemComponent {
  @Input() item!: GridItem;
  @Input() cardColor: string = 'surface-0';
  @Input() cardHoverColor: string = 'surface-100'

  isHovered!: boolean;

  constructor(private router: Router) {}

  navigateTo(item: GridItem | undefined): void {
    if (item) {
      if (item.content.isNavPathExternal) {
        window.open(item.content.navPath, '_blank');
      } else {
        const path = item.content.navPath || 'not-found';

        if (path) {
          const url = this.router.serializeUrl(
            this.router.createUrlTree([path])
          );
          window.open(url, '_blank');
        } else {
          console.error('Navigation path is not provided.');
        }
      }
    }
  }

  onMouseOver() {
    this.isHovered = true;
    console.log('in', this.isHovered);
  }
  onMouseLeave() {
    this.isHovered = false;
    console.log('out', this.isHovered);
    
  }
}
