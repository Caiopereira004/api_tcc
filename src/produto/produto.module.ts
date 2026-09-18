import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service.js';
import { ProdutoController } from './produto.controller.js';
import { Produto } from './entities/produto.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService],
  imports: [TypeOrmModule.forFeature([Produto])],
})
export class ProdutoModule {}
