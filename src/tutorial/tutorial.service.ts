import { Injectable } from '@nestjs/common';
import { TutorialController } from './tutorial.controller.js';
import { CreateTutorialDto} from './dto/create-tutorial.dto.js';
import { UpdateTutorialDto } from './dto/update-tutorial.dto.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tutorial } from './entities/tutorial.entity.js';

@Injectable()
export class TutorialService {
  constructor(
    @InjectRepository(Tutorial)
    private readonly tutorialRepository: Repository<Tutorial>,
  ){}

  create(createTutorialDto: CreateTutorialDto) {
    const novoTutorial = this.tutorialRepository.create(createTutorialDto);
    return this.tutorialRepository.save(novoTutorial);
  }

  findAll() {
    return this.tutorialRepository.find();
  }

  findOne(id: number) {
    return this.tutorialRepository.findOneBy({ id });
  }

  async update(id: number, updateTutorialDto: UpdateTutorialDto) {
    await this.tutorialRepository.update(id, updateTutorialDto);
    return this.findOne(id);
  }

  async delete(id: number) {
    await this.tutorialRepository.delete(id);
    return { deletado: true };
  }
}
