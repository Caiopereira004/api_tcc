import { Injectable } from '@nestjs/common';
import { CreateCartaoDto } from './dto/create-cartao.dto.js';
import { UpdateCartaoDto } from './dto/update-cartao.dto.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cartao } from './entities/cartao.entity.js';
import { Certificate } from 'crypto';

@Injectable()
export class CartaoService {
  constructor(
    @InjectRepository(Cartao)
    private readonly cartaoRepository: Repository <Cartao>
  ){}

  create(createCartaoDto: CreateCartaoDto) {
    const novoCartao = this.cartaoRepository.create(createCartaoDto);
    return this.cartaoRepository.save(novoCartao);
  }

  findAll() {
    return this.cartaoRepository.find();
  }

  findOne(id: number) {
    return this.cartaoRepository.findOneBy({ id });
  }

  async update(id: number, updateCartaoDto: UpdateCartaoDto) {
    await this.cartaoRepository.update(id, updateCartaoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.cartaoRepository.delete(id);
    return { deletad: true };
  }
}
