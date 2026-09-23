import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaTutorialService } from './categoria_tutorial.service.js';
import { CreateCategoriaTutorialDto } from './dto/create-categoria_tutorial.dto.js';
import { UpdateCategoriaTutorialDto } from './dto/update-categoria_tutorial.dto.js';

@Controller('categoria-tutorial')
export class CategoriaTutorialController {
  constructor(private readonly categoriaTutorialService: CategoriaTutorialService) {}

  @Post()
  create(@Body() createCategoriaTutorialDto: CreateCategoriaTutorialDto) {
    return this.categoriaTutorialService.create(createCategoriaTutorialDto);
  }

  @Get()
  findAll() {
    return this.categoriaTutorialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaTutorialService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaTutorialService.remove(+id);
  }
}
