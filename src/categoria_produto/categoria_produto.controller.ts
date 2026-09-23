import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaProdutoService } from './categoria_produto.service.js';
import { CreateCategoriaProdutoDto } from './dto/create-categoria_produto.dto.js';

@Controller('categoria-produto')
export class CategoriaProdutoController {
  constructor(private readonly categoriaProdutoService: CategoriaProdutoService) {}

  @Post()
  create(@Body() createCategoriaProdutoDto: CreateCategoriaProdutoDto) {
    return this.categoriaProdutoService.create(createCategoriaProdutoDto);
  }

  @Get()
  findAll() {
    return this.categoriaProdutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaProdutoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaProdutoService.remove(+id);
  }
}
