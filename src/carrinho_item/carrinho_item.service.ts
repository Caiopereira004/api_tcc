import { Injectable } from '@nestjs/common';
import { CreateCarrinhoItemDto } from './dto/create-carrinho_item.dto.js';
import { UpdateCarrinhoItemDto } from './dto/update-carrinho_item.dto.js';
import { CarrinhoItem } from './entities/carrinho_item.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarrinhoItemService {
  constructor(
    @InjectRepository(CarrinhoItem)
    private readonly carrinho_itemRepository: Repository <CarrinhoItem>,
  ) {}

  create(createCarrinhoItemDto: CreateCarrinhoItemDto) {
    const novoCarrinhoItem = this.carrinho_itemRepository.create(createCarrinhoItemDto);
    return this.carrinho_itemRepository.save(novoCarrinhoItem);
  }

  findAll() {
    return this.carrinho_itemRepository.find();
  }

  findOne(id: number) {
    return this.carrinho_itemRepository.findOneBy({ id });
  }

  async update(id: number, updateCarrinhoItemDto: UpdateCarrinhoItemDto) {
    await this.carrinho_itemRepository.update(id, updateCarrinhoItemDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.carrinho_itemRepository.delete(id)
    return { deletado: true};
  }
}
