import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { Dream } from './entities/dream.entity';

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

  parseHtml(html: string): Dream[] {
    const $ = cheerio.load(html);
    const contentDiv = $('.doc-content');

    if (contentDiv.length === 0) {
      return []; 
    }
    const divHtml = contentDiv.html();
    const $divContent = cheerio.load(divHtml);

    const stories: Dream[] = [];
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
            stories.push({
              name: currentStoryName || 'Untitled',
              content: currentContent.trim()
            });
          }

          currentStoryName = $(element).find('li').first().text().trim();
          currentContent = '';
          processingStory = true;
        }
      } else if (tagName === 'p' && processingStory) {
        currentContent += $(element) + ' ';
      }
    });

    if (processingStory) {
      stories.push({
        name: currentStoryName || 'Untitled',
        content: currentContent.trim()
      });
    }

    return stories;
  }

  async getStories(): Promise<Dream[]> {
    const html = await this.fetchDocumentContent();
    return this.parseHtml(html);
  }
}
