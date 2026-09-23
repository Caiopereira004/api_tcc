import { Injectable } from '@nestjs/common';
import { CreateCategoriaTutorialDto } from './dto/create-categoria_tutorial.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaTutorial } from './entities/categoria_tutorial.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaTutorialService {
  constructor(
    @InjectRepository(CategoriaTutorial)
    private readonly categoria_tutorialRepository: Repository <CategoriaTutorial>,
  ){}

  create(createCategoriaTutorialDto: CreateCategoriaTutorialDto) {
    const novaCategoriaProduto = this.categoria_tutorialRepository.create(createCategoriaTutorialDto);
    return this.categoria_tutorialRepository.save(novaCategoriaProduto);
  }

  findAll() {
    return this.categoria_tutorialRepository.find();
  }

  findOne(id: number) {
    return this.categoria_tutorialRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.categoria_tutorialRepository.delete(id);
    return { deletado: true};
  }
}
