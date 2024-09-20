import { Route } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { PageNotFoundComponent } from '../app/components/shared/page-not-found/page-not-found.component';
import { CrudWithNestjsComponent } from './components/projects/crud-with-nestjs/components/crud-with-nestjs.component';
import { SmallAnimationsComponent } from './components/projects/small-animations/small-animations.component';
import { DreamsToPaperComponent } from './components/projects/dreams-to-paper/dreams-to-paper.component';
import { HowToDeployFrontendInAwsComponent } from './components/projects/how-to-deploy-frontend-in-aws/how-to-deploy-frontend-in-aws.component';

// lazy-load standalone component 
export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'crud-with-nestjs', component: CrudWithNestjsComponent },
  { path: 'small-animations', component: SmallAnimationsComponent },
  { path: 'dreams-to-paper', component: DreamsToPaperComponent },
  { path: 'how-to-deploy-frontend-in-aws', component: HowToDeployFrontendInAwsComponent },
  { path: '**', component: PageNotFoundComponent },
];
