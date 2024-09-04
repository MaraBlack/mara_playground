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
    this.googleDocService.getDocContent().subscribe(response => {


      try {
        // Parse the JSON string if it's not already an object
        const data = typeof response === 'string' ? JSON.parse(response) : response;
        console.log('Parsed data:', data);

        if (Array.isArray(data)) {
          this.dreams = data;
        } else {
          console.error('Expected an array but got:', data);
        }
      } catch (error) {
        this.error = 'Error parsing response';
        console.error('Error parsing response:', error);
      }
    });
  }
}
