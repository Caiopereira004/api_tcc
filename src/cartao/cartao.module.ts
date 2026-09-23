import { Module } from '@nestjs/common';
import { CartaoService } from './cartao.service.js';
import { CartaoController } from './cartao.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cartao } from './entities/cartao.entity.js';

@Module({
  controllers: [CartaoController],
  providers: [CartaoService],
  imports: [TypeOrmModule.forFeature([Cartao])],
})
export class CartaoModule {}
