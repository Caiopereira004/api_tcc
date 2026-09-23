import { Module } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service.js';
import { CarrinhoController } from './carrinho.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrinho } from './entities/carrinho.entity.js';

@Module({
  controllers: [CarrinhoController],
  providers: [CarrinhoService],
  imports: [TypeOrmModule.forFeature([Carrinho])],
})

export class CarrinhoModule {}
