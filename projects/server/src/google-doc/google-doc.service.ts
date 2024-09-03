import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class GoogleDocService {
  private readonly docUrl = 'https://docs.google.com/document/d/1JWLqYeCeAFsbuq_uUSwXxLbEMSzgHmjEipbko8bWbjs/pub';

  async fetchDocumentContent(): Promise<string> {
    try {
      const response = await axios.get(this.docUrl);
      return response.data;
    } catch (error) {
      throw new HttpException('Error fetching document content', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  parseHtml(html: string): { name: string; content: string }[] {
    const $ = cheerio.load(html);

    // Find the <div> with class "doc-content"
    const contentDiv = $('.doc-content');

    if (contentDiv.length === 0) {
      return []; // Return an empty array if the <div> is not found
    }

    // Get the HTML content within the <div>
    const divHtml = contentDiv.html();

    // Load the <div> content into cheerio for further processing
    const $divContent = cheerio.load(divHtml);

    const stories: { name: string; content: string }[] = [];
    let currentStoryName: string | null = null;
    let currentContent: string = '';
    let processingStory: boolean = false;

    // Iterate over each element within the <div>
    $divContent('*').each((_, element) => {
      const tagName = $(element).prop('tagName').toLowerCase();

      if (tagName === 'ol') {
        // When an <ol> is encountered
        const start = $(element).attr('start');
        if (start) {
          if (processingStory) {
            // Push the previous story into the array
            stories.push({
              name: currentStoryName || 'Untitled',
              content: currentContent.trim()
            });
          }

          // Start processing a new story
          currentStoryName = $(element).find('li').first().text().trim();
          currentContent = '';
          processingStory = true;
        }
      } else if (tagName === 'p' && processingStory) {
        // Gather content from <p> tags if a story is being processed
        currentContent += $(element) + ' ';
      }
    });

    // Push the last story if any
    if (processingStory) {
      stories.push({
        name: currentStoryName || 'Untitled',
        content: currentContent.trim()
      });
    }

    return stories;
  }

  async getStories(): Promise<{ name: string; content: string }[]> {
    const html = await this.fetchDocumentContent();
    return this.parseHtml(html);
  }
}
