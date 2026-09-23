import { Injectable } from '@nestjs/common';
import { CreateFavoritosTutorialDto } from './dto/create-favoritos_tutorial.dto.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoritosTutorial } from './entities/favoritos_tutorial.entity.js';


@Injectable()
export class FavoritosTutorialService {
  constructor(
    @InjectRepository(FavoritosTutorial)
    private readonly favoritos_tutorialRepository: Repository<FavoritosTutorial>,
  ){}

  create(createFavoritosTutorialDto: CreateFavoritosTutorialDto) {
    const novoFavoritosTutorial = this.favoritos_tutorialRepository.create(createFavoritosTutorialDto);
    return this.favoritos_tutorialRepository.save(novoFavoritosTutorial);
  }

  findAll() {
    return this.favoritos_tutorialRepository.find();
  }

  findOne(id: number) {
    return this.favoritos_tutorialRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.favoritos_tutorialRepository.delete(id);
    return { deletado: true };
  }
}
