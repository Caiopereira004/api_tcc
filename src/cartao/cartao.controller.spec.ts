import { Test, TestingModule } from '@nestjs/testing';
import { CartaoController } from './cartao.controller.js';
import { CartaoService } from './cartao.service.js';

describe('CartaoController', () => {
  let controller: CartaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartaoController],
      providers: [CartaoService],
    }).compile();

    controller = module.get<CartaoController>(CartaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
