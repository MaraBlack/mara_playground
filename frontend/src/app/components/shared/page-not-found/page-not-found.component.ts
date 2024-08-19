import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  navigateTo(path: string): void {


    if (path) {
      const url = this.router.serializeUrl(this.router.createUrlTree([path]));
      this.router.navigate([path]);
    } else {
      console.error('Navigation path is not provided.');
    }
  }
}
