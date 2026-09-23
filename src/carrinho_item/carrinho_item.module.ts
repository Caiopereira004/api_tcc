import { Module } from '@nestjs/common';
import { CarrinhoItemService } from './carrinho_item.service.js';
import { CarrinhoItemController } from './carrinho_item.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarrinhoItem } from './entities/carrinho_item.entity.js';

@Module({
  controllers: [CarrinhoItemController],
  providers: [CarrinhoItemService],
  imports: [TypeOrmModule.forFeature([CarrinhoItem])]
})
export class CarrinhoItemModule {}
