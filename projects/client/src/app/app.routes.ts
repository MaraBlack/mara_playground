import { Route } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { PageNotFoundComponent } from '../app/components/shared/page-not-found/page-not-found.component';
import { CrudWithNestjsComponent } from './components/projects/crud-with-nestjs/components/crud-with-nestjs.component';
import { SmallAnimationsComponent } from './components/projects/small-animations/small-animations.component';

// lazy-load standalone component
export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'crud-with-nestjs', component: CrudWithNestjsComponent },
  { path: 'small-animations', component: SmallAnimationsComponent },
  { path: '**', component: PageNotFoundComponent },
];
