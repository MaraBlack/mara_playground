import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GridItem } from '../../models/grid-item.interface';

@Component({
  selector: 'app-grid-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.scss'
})
export class GridItemComponent {
  @Input() item!: GridItem;
}


