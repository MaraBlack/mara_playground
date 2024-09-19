import { Component, OnInit } from '@angular/core';
import { GoogleDocService } from './shared/service/google-doc.service';
import { CommonModule } from '@angular/common';
import { StoryCardComponent } from './shared/components/story-card/story-card.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dreams-to-paper',
  standalone: true,
  imports: [CommonModule, StoryCardComponent],
  templateUrl: './dreams-to-paper.component.html',
  styleUrls: ['./dreams-to-paper.component.scss'],
})
export class DreamsToPaperComponent implements OnInit {
  dreams: { name: string; content: string }[] = [];
  error: string | null = null;

  constructor(
    private googleDocService: GoogleDocService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.googleDocService.getDocContent().subscribe({
      next: (response) => {
        try {
          // Parse the JSON string if it's not already an object
          const data =
            typeof response === 'string' ? JSON.parse(response) : response;
          console.log('Parsed data:', data);

          if (Array.isArray(data)) {
            this.dreams = data;
          } else {
            console.error('Expected an array but got:', data);
          }
          this.spinner.hide();
        } catch (error) {
          console.error('Error parsing response:', error);
        }
      },
      error: (error) => {
        this.spinner.hide();
        this.error = "Sorry, we could not get the data!";
      },
    });
  }
}
