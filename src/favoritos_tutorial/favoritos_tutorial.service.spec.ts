import { Test, TestingModule } from '@nestjs/testing';
import { FavoritosTutorialService } from './favoritos_tutorial.service.js';

describe('FavoritosTutorialService', () => {
  let service: FavoritosTutorialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritosTutorialService],
    }).compile();

    service = module.get<FavoritosTutorialService>(FavoritosTutorialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
