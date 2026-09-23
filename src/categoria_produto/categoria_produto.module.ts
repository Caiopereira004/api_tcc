import { Module } from '@nestjs/common';
import { CategoriaProdutoService } from './categoria_produto.service.js';
import { CategoriaProdutoController } from './categoria_produto.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaProduto } from './entities/categoria_produto.entity.js';

@Module({
  controllers: [CategoriaProdutoController],
  providers: [CategoriaProdutoService],
  imports: [TypeOrmModule.forFeature([CategoriaProduto])]
})
export class CategoriaProdutoModule {}
