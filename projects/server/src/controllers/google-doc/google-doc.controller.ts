import { Controller, Get } from '@nestjs/common';
import { GoogleDocService } from './google-doc.service';
import { Dream } from './entities/dream.entity';

@Controller('public-doc')
export class GoogleDocController {
  constructor(private readonly googleDocService: GoogleDocService) {}

  @Get('content')
  getContent(): Promise<Dream[]> {
    return this.googleDocService.getStories();
  }
}
