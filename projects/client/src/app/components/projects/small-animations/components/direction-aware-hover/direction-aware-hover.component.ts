import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Item } from './item.class';

@Component({
  selector: 'app-direction-aware-hover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direction-aware-hover.component.html',
  styleUrl: './direction-aware-hover.component.scss',
})
export class DirectionAwareHoverComponent {
  @Input() size: number = 100;
  @Input() color: string = 'lightgrey';
  @Input() hoverColor: string = 'orange';

  items = [
    {
      title: '1.1',
      description: 'Card 1',
      size: this.size,
      color: this.color,
      hoverColor: this.hoverColor
    },
    {
      title: '1.2',
      description: 'Card 2',
      size: this.size,
      color: this.color,
      hoverColor: this.hoverColor
    },
    {
      title: '1.3',
      description: 'Card 3',
      size: this.size,
      color: this.color,
      hoverColor: this.hoverColor
    },
    {
      title: '1.4',
      description: 'Card 4',
      size: this.size,
      color: this.color,
      hoverColor: this.hoverColor
    },
    {
      title: '1.5',
      description: 'Card 5',
      size: this.size,
      color: this.color,
      hoverColor: this.hoverColor
    },
  ];

  directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };

  // compose class name, e.g in-top, in-bottom etc
  classNames = ['in', 'out'].flatMap((p) =>
    Object.values(this.directions).map((d) => `${p}-${d}`)
  );

  ngAfterViewInit() {
    const nodes = Array.from(document.querySelectorAll('li'));

    nodes.forEach((node) => new Item(node, this.directions, this.classNames));
  }
}


