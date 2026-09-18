import { Test, TestingModule } from '@nestjs/testing';
import { FavoritosTutorialController } from './favoritos_tutorial.controller.js';
import { FavoritosTutorialService } from './favoritos_tutorial.service.js';

describe('FavoritosTutorialController', () => {
  let controller: FavoritosTutorialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritosTutorialController],
      providers: [FavoritosTutorialService],
    }).compile();

    controller = module.get<FavoritosTutorialController>(FavoritosTutorialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
