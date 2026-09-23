import { Injectable } from '@nestjs/common';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto.js';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrinho } from './entities/carrinho.entity.js';

@Injectable()
export class CarrinhoService {
  constructor(
  @InjectRepository(Carrinho)
  private readonly carrinhoRepository: Repository <Carrinho>,
) {}

  create(createCarrinhoDto: CreateCarrinhoDto) {
    const novoCarrinho = this.carrinhoRepository.create(createCarrinhoDto);
    return this.carrinhoRepository.save(novoCarrinho);
  }

  findAll() {
    return this.carrinhoRepository.find();
  }

  findOne(id: number) {
    return this.carrinhoRepository.findOneBy({ id });
  }

  async update(id: number, updateCarrinhoDto: UpdateCarrinhoDto) {
  await this.carrinhoRepository.update(id, updateCarrinhoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.carrinhoRepository.delete(id);
    return{ deletado: true };
  }
}
