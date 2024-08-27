import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { GridItemComponent } from './components/shared/grid-item/grid-item.component';
import { GridItem } from './models/grid-item.interface';
import { projectsPlayground } from './data/projects-playground';

import { HTTP_INTERCEPTORS, HttpClientModule  } from '@angular/common/http';
import { ApiService } from './common/http-api/api.service';
import { DataService } from './components/projects/crud-with-nestjs/shared/services/data.service';
import { ENV_APP_CONFIG, ENV_CONFIG_TOKEN } from './common/http-config/env-config';
import { ApiErrorInterceptor } from './common/http-api/api-error-interceptor.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet , GridItemComponent],
  providers: [
    ApiService,
    DataService,
    {
      provide: ENV_CONFIG_TOKEN,
      useValue: ENV_APP_CONFIG,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },
  ],
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
