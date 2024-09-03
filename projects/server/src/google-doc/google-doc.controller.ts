import { Controller, Get } from '@nestjs/common';
import { GoogleDocService } from './google-doc.service';

@Controller('public-doc')
export class GoogleDocController {
  constructor(private readonly googleDocService: GoogleDocService) {}

  @Get('content')
  async getContent() {
    return this.googleDocService.getStories();
  }
}
