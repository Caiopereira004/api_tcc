import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TutorialService } from './tutorial.service.js';
import { CreateTutorialDto } from './dto/create-tutorial.dto.js';
import { UpdateTutorialDto } from './dto/update-tutorial.dto.js';

@Controller('tutorial')
export class TutorialController {
  constructor(private readonly tutorialService: TutorialService) {}

  @Post()
  create(@Body() createTutorialDto: CreateTutorialDto) {
    return this.tutorialService.create(createTutorialDto);
  }

  @Get()
  findAll() {
    return this.tutorialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTutorialDto: UpdateTutorialDto) {
    return this.tutorialService.update(+id, updateTutorialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorialService.delete(+id);
  }
}
