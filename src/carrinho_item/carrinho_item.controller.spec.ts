import { Test, TestingModule } from '@nestjs/testing';
import { CarrinhoItemController } from './carrinho_item.controller.js';
import { CarrinhoItemService } from './carrinho_item.service.js';

describe('CarrinhoItemController', () => {
  let controller: CarrinhoItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarrinhoItemController],
      providers: [CarrinhoItemService],
    }).compile();

    controller = module.get<CarrinhoItemController>(CarrinhoItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
