import { Module } from '@nestjs/common';
import { PedidoItemService } from './pedido_item.service.js';
import { PedidoItemController } from './pedido_item.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoItem } from './entities/pedido_item.entity.js';

@Module({
  controllers: [PedidoItemController],
  providers: [PedidoItemService],
  imports: [TypeOrmModule.forFeature([PedidoItem])],
})
export class PedidoItemModule {}
