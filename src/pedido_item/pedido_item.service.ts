import { Injectable } from '@nestjs/common';
import { CreatePedidoItemDto } from './dto/create-pedido_item.dto.js';
import { UpdatePedidoItemDto } from './dto/update-pedido_item.dto.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoItem } from './entities/pedido_item.entity.js';

@Injectable()
export class PedidoItemService {
  constructor(
    @InjectRepository(PedidoItem)
    private readonly pedido_itemRepository: Repository<PedidoItem>,
  ){}

  create(createPedidoItemDto: CreatePedidoItemDto) {
    const novoPedidoItem = this.pedido_itemRepository.create(createPedidoItemDto);
    return this.pedido_itemRepository.save(novoPedidoItem);
  }

  findAll() {
    return this.pedido_itemRepository.find();
  }

  findOne(id: number) {
    return this.pedido_itemRepository.findOneBy({ id });
  }

  async update(id: number, updatePedidoItemDto: UpdatePedidoItemDto) {
    await this.pedido_itemRepository.update( id, updatePedidoItemDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.pedido_itemRepository.delete(id);
    return { deletado: true};
  }
}
