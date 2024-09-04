import { Component, OnInit } from '@angular/core';
import { GoogleDocService } from './shared/service/google-doc.service';
import { CommonModule } from '@angular/common';
import { StoryCardComponent } from './shared/components/story-card/story-card.component';

@Component({
  selector: 'app-dreams-to-paper',
  standalone: true,
  imports: [CommonModule, StoryCardComponent],
  templateUrl: './dreams-to-paper.component.html',
  styleUrls: ['./dreams-to-paper.component.scss']
})
export class DreamsToPaperComponent implements OnInit {
  dreams: { name: string, content: string }[] = [];
  error: string | null = null;

  constructor(private googleDocService: GoogleDocService) { }

  ngOnInit(): void {
    this.googleDocService.getDocContent().subscribe({
      next: data => {
        this.dreams = data;
      },
      error: err => {
        console.error('Error in DreamsToPaperComponent:', err);
        this.error = 'Failed to load data. Please try again later.';
      }
    });
  }
}
