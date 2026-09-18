import { Module } from '@nestjs/common';
import { TutorialService } from './tutorial.service.js';
import { TutorialController } from './tutorial.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutorial } from './entities/tutorial.entity.js';

@Module({
  controllers: [TutorialController],
  providers: [TutorialService],
  imports: [TypeOrmModule.forFeature([Tutorial])],
})

export class TutorialModule {}
