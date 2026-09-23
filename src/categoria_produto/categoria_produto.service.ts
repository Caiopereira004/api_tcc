import { Injectable } from '@nestjs/common';
import { CreateCategoriaProdutoDto } from './dto/create-categoria_produto.dto.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaProduto} from './entities/categoria_produto.entity.js';

@Injectable()
export class CategoriaProdutoService {
  constructor(
    @InjectRepository(CategoriaProduto)
    private readonly categoria_produtoRepository: Repository <CategoriaProduto>,
  ) {}

  create(createCategoriaProdutoDto: CreateCategoriaProdutoDto) {
    const novaCategoriaProduto = this.categoria_produtoRepository.create(createCategoriaProdutoDto);
    return this.categoria_produtoRepository.save(novaCategoriaProduto);
  }

  findAll() {
    return this.categoria_produtoRepository.find();
  }

  findOne(id: number) {
    return this.categoria_produtoRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.categoria_produtoRepository.delete(id);
    return { deletado: true };
  }
}
