import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoritosTutorialService } from './favoritos_tutorial.service.js';
import { CreateFavoritosTutorialDto } from './dto/create-favoritos_tutorial.dto.js';

@Controller('favoritos-tutorial')
export class FavoritosTutorialController {
  constructor(private readonly favoritosTutorialService: FavoritosTutorialService) {}

  @Post()
  create(@Body() createFavoritosTutorialDto: CreateFavoritosTutorialDto) {
    return this.favoritosTutorialService.create(createFavoritosTutorialDto);
  }

  @Get()
  findAll() {
    return this.favoritosTutorialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritosTutorialService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoritosTutorialService.remove(+id);
  }
}
