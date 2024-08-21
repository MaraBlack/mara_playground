import { Route, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { CrudWithNestjsComponent } from '../app/components/projects/crud-with-nestjs/crud-with-nestjs.component';
import { PageNotFoundComponent } from '../app/components/shared/page-not-found/page-not-found.component';

// lazy-load standalone component
export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'crud-with-nestjs', component: CrudWithNestjsComponent },
  { path: '**', component: PageNotFoundComponent },
];
