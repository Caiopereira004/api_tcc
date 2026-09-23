import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarrinhoItemService } from './carrinho_item.service.js';
import { CreateCarrinhoItemDto } from './dto/create-carrinho_item.dto.js';
import { UpdateCarrinhoItemDto } from './dto/update-carrinho_item.dto.js';

@Controller('carrinho-item')
export class CarrinhoItemController {
  constructor(private readonly carrinhoItemService: CarrinhoItemService) {}

  @Post()
  create(@Body() createCarrinhoItemDto: CreateCarrinhoItemDto) {
    return this.carrinhoItemService.create(createCarrinhoItemDto);
  }

  @Get()
  findAll() {
    return this.carrinhoItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carrinhoItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarrinhoItemDto: UpdateCarrinhoItemDto) {
    return this.carrinhoItemService.update(+id, updateCarrinhoItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carrinhoItemService.remove(+id);
  }
}
