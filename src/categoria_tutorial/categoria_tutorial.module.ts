import { Module } from '@nestjs/common';
import { CategoriaTutorialService } from './categoria_tutorial.service.js';
import { CategoriaTutorialController } from './categoria_tutorial.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaTutorial } from './entities/categoria_tutorial.entity.js';

@Module({
  controllers: [CategoriaTutorialController],
  providers: [CategoriaTutorialService],
  imports: [TypeOrmModule.forFeature([CategoriaTutorial])]
})
export class CategoriaTutorialModule {}
