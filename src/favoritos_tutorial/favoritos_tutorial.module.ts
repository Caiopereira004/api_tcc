import { Module } from '@nestjs/common';
import { FavoritosTutorialService } from './favoritos_tutorial.service.js';
import { FavoritosTutorialController } from './favoritos_tutorial.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritosTutorial } from './entities/favoritos_tutorial.entity.js';

@Module({
  controllers: [FavoritosTutorialController],
  providers: [FavoritosTutorialService],
  imports: [TypeOrmModule.forFeature([FavoritosTutorial])]
})
export class FavoritosTutorialModule {}
