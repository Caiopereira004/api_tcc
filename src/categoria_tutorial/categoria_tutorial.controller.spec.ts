import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaTutorialController } from './categoria_tutorial.controller.js';
import { CategoriaTutorialService } from './categoria_tutorial.service.js';

describe('CategoriaTutorialController', () => {
  let controller: CategoriaTutorialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaTutorialController],
      providers: [CategoriaTutorialService],
    }).compile();

    controller = module.get<CategoriaTutorialController>(CategoriaTutorialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
