import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto.js';
import { UpdatePedidoDto } from './dto/update-pedido.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity.js';

@Injectable()
export class PedidoService {
  constructor(
  @InjectRepository(Pedido)
  private readonly pedidoRepository: Repository<Pedido>,
) {}

  create(createPedidoDto: CreatePedidoDto) {
    const novoPedido = this.pedidoRepository.create(createPedidoDto);
    return this.pedidoRepository.save(novoPedido);
  }

  findAll() {
    return this.pedidoRepository.find();
  }

  findOne(id: number) {
    return this.pedidoRepository.findOneBy({ id });
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    await this.pedidoRepository.update(id, updatePedidoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.pedidoRepository.delete(id);
    return { deletado: true };
  }
}
