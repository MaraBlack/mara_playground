import { Route, Routes } from '@angular/router';

// lazy-load standalone component
export const APP_ROUTES_LAZY: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('../app/app.component').then((m) => m.AppComponent),
  },
  {
    path: 'crud-with-nestjs',
    loadComponent: () =>
      import(
        '../app/components/projects/crud-with-nestjs/crud-with-nestjs.component'
      ).then((m) => m.CrudWithNestjsComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        '../app/components/shared/page-not-found/page-not-found.component'
      ).then((m) => m.PageNotFoundComponent),
  },
];
