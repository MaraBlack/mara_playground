import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { GridItemComponent } from './components/shared/grid-item/grid-item.component';
import { GridItem } from './models/grid-item.interface';
import { Tags } from './models/tags.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GridItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'mara-playground';

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
            navPath: '/crud-with-nestjs',
            title: 'CRUD with Nest and Firebase',
            description:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
              tags: [Tags.NESTJS, Tags.ANGULAR, Tags.PRIME_FLEX]
          },
        },
        {
          id: '1-2',
          size: 'col-6',
          content: {
            title: 'test project 1-2',
            description:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
          },
        },
        {
          id: '1-3',
          size: 'col-12',
          content: {
            title: 'test project 1-3',
            description:
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
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
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
      },
    },
  ];

  isRouted = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isRouted = event.urlAfterRedirects !== '/'; // Adjust the condition based on your needs
      }
    });
  }

}
