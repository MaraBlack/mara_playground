import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { GridItemComponent } from './components/shared/grid-item/grid-item.component';
import { GridItem } from './models/grid-item.interface';
import { Tags } from './models/tags.model';
import { projectsPlayground } from './data/projects-playground';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GridItemComponent, PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'mara-playground';

  gridData: GridItem[] = projectsPlayground;
  isRouted = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isRouted = event.urlAfterRedirects !== '/';
      }
    });
  }
}
