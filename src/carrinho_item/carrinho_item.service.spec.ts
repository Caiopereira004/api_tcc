import { Test, TestingModule } from '@nestjs/testing';
import { CarrinhoItemService } from './carrinho_item.service.js';

describe('CarrinhoItemService', () => {
  let service: CarrinhoItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarrinhoItemService],
    }).compile();

    service = module.get<CarrinhoItemService>(CarrinhoItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
