import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GridItemComponent } from './components/grid-item/grid-item.component';
import { GridItem } from './models/grid-item.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GridItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'expenses-control-angular';

  gridData: GridItem[] = [
    {
      id: '1',
      size: 'col-8',
      content: {
        title: '',
        description: '',
      },
      children: [
        {
          id: '1-1',
          size: 'col-6',
          content: {
            title: 'test project 1-1',
            description:
              ' CREATE src/app/components/grid-item/grid-item.component.html (25 bytes) CREATE src/app/components/grid-item/grid-item.component.spec.ts 634 bytes',
          },
        },
        {
          id: '1-2',
          size: 'col-6',
          content: {
            title: 'test project 1-2',
            description:
              ' CREATE src/app/components/grid-item/grid-item.component.html (25 bytes) CREATE src/app/components/grid-item/grid-item.component.spec.ts 634 bytes',
          },
        },
        {
          id: '1-3',
          size: 'col-12',
          content: {
            title: 'test project 1-3',
            description:
              ' CREATE src/app/components/grid-item/grid-item.component.html (25 bytes) CREATE src/app/components/grid-item/grid-item.component.spec.ts 634 bytes',
          },
        },
      ],
    },
    {
      id: '2',
      size: 'col',
      content: {
        title: 'test project 2',
        description:
          ' CREATE src/app/components/grid-item/grid-item.component.html (25 bytes) CREATE src/app/components/grid-item/grid-item.component.spec.ts 634 bytes',
      },
    },
  ];
}
