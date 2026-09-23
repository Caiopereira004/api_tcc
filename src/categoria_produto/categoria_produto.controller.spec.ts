import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaProdutoController } from './categoria_produto.controller.js';
import { CategoriaProdutoService } from './categoria_produto.service.js';

describe('CategoriaProdutoController', () => {
  let controller: CategoriaProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaProdutoController],
      providers: [CategoriaProdutoService],
    }).compile();

    controller = module.get<CategoriaProdutoController>(CategoriaProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
