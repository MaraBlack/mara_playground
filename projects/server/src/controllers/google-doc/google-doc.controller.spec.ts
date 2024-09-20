import { Test, TestingModule } from '@nestjs/testing';
import { GoogleDocController } from './google-doc.controller';

describe('GoogleDocController', () => {
  let controller: GoogleDocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleDocController],
    }).compile();

    controller = module.get<GoogleDocController>(GoogleDocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
