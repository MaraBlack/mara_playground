import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-deploy-frontend-in-aws',
  standalone: true,
  imports: [],
  templateUrl: './how-to-deploy-frontend-in-aws.component.html',
  styleUrl: './how-to-deploy-frontend-in-aws.component.scss'
})
export class HowToDeployFrontendInAwsComponent {
  gitHardcodedPathToImg = 'https://raw.githubusercontent.com/MaraBlack/mara_playground/main/projects/client/src/assets/img/';

  scrollTo(id: string) {
    const el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'});
  }
}
