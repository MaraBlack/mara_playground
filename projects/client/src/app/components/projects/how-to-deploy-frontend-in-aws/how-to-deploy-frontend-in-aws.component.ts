import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-how-to-deploy-frontend-in-aws',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-to-deploy-frontend-in-aws.component.html',
  styleUrl: './how-to-deploy-frontend-in-aws.component.scss',
})
export class HowToDeployFrontendInAwsComponent {
  gitHardcodedPathToImg =
    'https://raw.githubusercontent.com/MaraBlack/mara_playground/main/projects/client/src/assets/img/';

  isSticky = false;
  activeId = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the section is in the viewport
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          this.activeId = id;
        }
      }
    });

    // Check if the sticky element should become fixed
    const stickyElement = document.querySelector('.sticky');
    if (stickyElement) {
      const stickyOffset = stickyElement.getBoundingClientRect().top;
      this.isSticky = stickyOffset <= 0;
    }
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
