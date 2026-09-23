import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaTutorialService } from './categoria_tutorial.service.js';

describe('CategoriaTutorialService', () => {
  let service: CategoriaTutorialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaTutorialService],
    }).compile();

    service = module.get<CategoriaTutorialService>(CategoriaTutorialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
