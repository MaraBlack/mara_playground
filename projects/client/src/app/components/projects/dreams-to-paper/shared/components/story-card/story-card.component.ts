import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-story-card',
  standalone: true,
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {
  @Input() story!: { name: string; content: string };
  sanitizedContent: SafeHtml = '';
  truncatedContent: SafeHtml = '';
  isTruncated: boolean = true;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.sanitizedContent = this.sanitizeHtml(this.story.content);
    this.truncatedContent = this.sanitizeHtml(this.truncateContent(this.story.content));
  }

  sanitizeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  truncateContent(content: string, maxLength: number = 600): string {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  }

  toggleTruncate() {
    this.isTruncated = !this.isTruncated;
  }
}
